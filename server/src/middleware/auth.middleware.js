import jwt from 'jsonwebtoken';
import User from '../models/User.model.js';

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized access, please login first!" });
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET);

        if(!decode){
            return res.status(401).json({ message: "Unauthorized access, Invalid Token" });
        }
        const user = await User.findById(decode.userId).select("-password")

        if(!user) {
            return res.status(404).json({ message: "unAuthorized ,User not found!" });
        }

        req.user = user;
        next();

    } catch (error) {
        console.log("Error in protectedRoute auth middleware: ", error.message);
        res.status(500).json({ message: "Internal server error", success: false });
    }
}