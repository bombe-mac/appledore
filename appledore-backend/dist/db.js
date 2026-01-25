import { Schema, Types, model } from "mongoose";
const userSchema = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true }
});
const contentSchema = new Schema({
    title: { type: String, required: true },
    link: { type: String, required: true },
    type: { type: String, enum: ['X', 'videos', 'document', 'blog', 'link'], required: true },
    userId: { type: Types.ObjectId, ref: 'user', required: true },
    tags: [{ type: Types.ObjectId, ref: 'tag' }],
});
const tagSchema = new Schema({
    title: { type: String, required: true }
});
const linkSchema = new Schema({
    hash: { type: String, required: true },
    userId: { type: Types.ObjectId, required: true, ref: 'user' }
});
export const userModel = model('user', userSchema);
export const contentModel = model('content', contentSchema);
export const tagModel = model('tag', tagSchema);
export const linkModel = model('link', linkSchema);
//# sourceMappingURL=db.js.map