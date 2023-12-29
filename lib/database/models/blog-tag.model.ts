import {Schema, models, model} from "mongoose";

const BlogTagSchema = new Schema({
    blog: { type: Schema.Types.ObjectId, ref: "Blog" },
    tag: { type: Schema.Types.ObjectId, ref: "Tag" }
})

const BlogTag = models.BlogTag || model("BlogTag", BlogTagSchema);

export default BlogTag