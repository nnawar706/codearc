import {Schema, models, model} from "mongoose";

const BlogSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    title: { type: String },  
    detail: { type: String },
    readers: { type: Number, default: 0 },
    status: { type: Schema.Types.ObjectId, ref: "BlogStatus", default: "659a7ea34d148227282d3fcb" },
    photoUrl: { type: String }
}, {
    timestamps: true,
})

const Blog = models.Blog || model("Blog", BlogSchema)

export default Blog