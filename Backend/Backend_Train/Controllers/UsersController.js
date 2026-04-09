import users from "../data/users.js"

export const getAllUsers = async (req, res) => {
    try {
        const Users = await users.find({});
        res.json(Users);
    } catch (error) {
        res
            .status(500)
            .json({
                message: "Error fetching users",
                error: error.message
            })
    }
};

export const getUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find((u) => u.id === userId);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
};