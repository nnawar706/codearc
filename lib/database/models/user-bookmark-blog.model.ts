import {Schema, models, model} from "mongoose";

const UserBookmarkBlogSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    blog: { type: Schema.Types.ObjectId, ref: "Blog" },
})

const UserBookmarkBlog = models.UserBookmarkBlog || model("UserBookmarkBlog", UserBookmarkBlogSchema);

export default UserBookmarkBlog