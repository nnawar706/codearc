import {Schema, models, model} from "mongoose";

const BlogSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true },  
    detail: { type: String },
    readers: { type: Number, default: 0 },
    status: { type: Schema.Types.ObjectId, ref: "BlogStatus" }
}, {
    timestamps: true,
})

const Blog = models.Blog || model("Blog", BlogSchema)

export default Blog