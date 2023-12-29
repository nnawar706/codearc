import {Schema, models, model} from "mongoose";

const BlogLikeSchema = new Schema({
    blog: { type: Schema.Types.ObjectId, ref: "Blog" },
    user: { type: Schema.Types.ObjectId, ref: "User" }
})

const BlogLike = models.BlogLike || model("BlogLike", BlogLikeSchema);

export default BlogLike