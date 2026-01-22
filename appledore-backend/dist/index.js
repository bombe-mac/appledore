import express from "express";
import mongoose from "mongoose";
import * as z from "zod";
import { contentModel, linkModel, userModel } from "./db.js";
import * as bcrypt from "bcrypt";
import "dotenv/config";
import jwt from "jsonwebtoken";
import { config } from "./config.js";
import { userMiddleware } from "./middleware/userMiddleware.js";
import { random } from "./utils.js";
import cors from "cors";
const app = express();
const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];
const options = {
    origin: allowedOrigins
};
app.use(cors(options));
app.use(express.json());
app.post('/api/v1/signup', async (req, res) => {
    const requiredBody = z.object({
        username: z.string(),
        password: z
            .string()
            .min(6)
            .max(100)
            .refine((val) => /[A-Z]/.test(val), {
            message: "Password must contain at least one uppercase letter",
        })
            .refine((val) => /[0-9]/.test(val), {
            message: "Password must contain at least one number",
        })
            .refine((val) => /[!@#$%^&*(),.?":{}|<>]/.test(val), {
            message: "Password must contain at least one special character",
        })
    });
    const afterParsing = requiredBody.safeParse(req.body);
    if (!afterParsing.success) {
        return res.json({
            msg: 'wrong format'
        });
    }
    const { username, password } = afterParsing.data;
    try {
        const existingUser = await userModel.findOne({ username });
        if (existingUser) {
            return res.json({
                msg: "username already exists"
            });
        }
        const hashedPassword = await bcrypt.hash(password, 3);
        await userModel.create({
            username,
            password: hashedPassword
        });
        res.status(201).json({ msg: 'signup succesful' });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'server error' });
    }
});
app.post('/api/v1/signin', async (req, res) => {
    try {
        const { username, password } = req.body;
        const response = await userModel.findOne({ username });
        if (!response) {
            return res.status(403).json({
                msg: "no username"
            });
        }
        const passwordMatch = await bcrypt.compare(password, response.password);
        if (passwordMatch) {
            const token = jwt.sign({ id: response._id.toString() }, config.JWT_SECRET);
            res.json({
                token
            });
        }
        else {
            res.status(403).json({
                msg: 'Incorrect password'
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server error' });
    }
});
app.post('/api/v1/content', userMiddleware, async (req, res) => {
    const { link, title, type } = req.body;
    await contentModel.create({
        link,
        title,
        //@ts-ignore
        userId: req.userId,
        type
    });
    res.json({
        message: "constent added"
    });
});
app.get('/api/v1/content', userMiddleware, async (req, res) => {
    //@ts-ignore
    const userId = req.userId;
    const content = await contentModel.find({ userId }).populate("userId", "username");
    res.json({
        content
    });
});
app.delete('/api/v1/content', userMiddleware, async (req, res) => {
    const contentId = req.body.contentId;
    //@ts-ignore
    await contentModel.deleteMany({ contentId, userId: req.userId });
    res.json({
        message: "Deleted"
    });
});
app.post('/api/v1/share', userMiddleware, async (req, res) => {
    const share = req.body.share;
    if (share) {
        //@ts-ignore
        const existingUser = await linkModel.findOne({ userId: req.userId });
        if (existingUser) {
            return res.json({
                hash: existingUser.hash
            });
        }
        const hash = random(10);
        await linkModel.create({
            hash: hash,
            //@ts-ignore
            userId: req.userId
        });
        res.json({
            hash
        });
    }
    else {
        await linkModel.deleteOne({
            //@ts-ignore
            userId: req.userId
        });
    }
    res.json({
        message: "updated shareable link"
    });
});
app.get('/api/v1/share/:sharelink', async (req, res) => {
    const hash = req.params.sharelink;
    const link = await linkModel.findOne({
        hash
    });
    if (!link) {
        return res.json({
            msg: "wrong hash returned"
        });
    }
    const content = await contentModel.find({ userId: link.userId });
    const user = await userModel.findOne({ _id: link.userId });
    if (!user) {
        return res.json({
            msg: "user not found"
        });
    }
    res.json({
        username: user.username,
        constent: content
    });
});
async function main() {
    const MONGO_URI = config.MONGO_URI;
    const PORT = config.PORT;
    if (!MONGO_URI) {
        throw new Error("MONGO_URI is not defined in environment variables");
    }
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
    catch (err) {
        console.error("Failed to start server:", err);
        process.exit(1);
    }
}
main();
//# sourceMappingURL=index.js.map