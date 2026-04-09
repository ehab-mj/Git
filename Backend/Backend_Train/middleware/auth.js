import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

const authenticateUser = async (req, res) => {
    try {
        // token is saving in headers
        const authHeader = req.headers.authorization

        //
        if (!authHeader || !authHeader.startswith("Bearer")) {
            console.log();

        }


        let decoded
        // checking token
        // verify
        try {

        } catch (jwtError) {
            console.log("error", jwtError.message);

        }
        // removing first 7 letter 
    } catch (error) {

    }
}