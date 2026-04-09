


import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { getDataBase } from "../config/database.js";


export const registerUser = async (req, res) => {
    try {
        const JWT_SECRET = process.env.JWT_SECRET;
        const { email, password, name } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const database = getDataBase();
        const usersCollection = database.collection("users");

        // Check if user already exists
        const existingUser = await usersCollection.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = {
            name: name || email.split("@")[0],
            email,
            password: hashedPassword,
            createdAt: new Date(),
        };

        const result = await usersCollection.insertOne(newUser);

        // Generate JWT token
        const token = jwt.sign(
            { userId: result.insertedId, email },
            JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.status(201).json({
            message: "User registered successfully",
            token,
            user: { id: result.insertedId, email, name: newUser.name },
        });
    } catch (error) {
        console.error("Register error:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const database = getDataBase();
        const usersCollection = database.collection("users");

        // Find user by email
        const user = await usersCollection.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.status(200).json({
            message: "Login successful",
            token,
            user: { id: user._id, email: user.email, name: user.name },
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};