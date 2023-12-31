import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    image: {
        type: Array,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    comment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "comments"
    }


}, { timestamps: true })

const PostModel = mongoose.model('posts', PostSchema)
export default PostModel