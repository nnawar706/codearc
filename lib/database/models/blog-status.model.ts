import {Schema, models, model} from "mongoose";

const BlogStatusSchema = new Schema({
    name: { type: String, required: true, unique: true},
})

const BlogStatus = models.BlogStatus || model("BlogStatus", BlogStatusSchema)

export default BlogStatus