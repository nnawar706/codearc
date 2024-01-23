import {Schema, models, model} from "mongoose";

const UserSchema = new Schema({
    authId: { type: String, required: true, unique: true },
    email: { type: String, required: [true, "Email is required."], unique: [true, "This email address is taken."] },
    username: { type: String, required: true, unique: true},
    name: { type: String, required: true },
    photoUrl: { type: String, required: true },
    blogs: [{ type: Schema.Types.ObjectId, ref: "Blog" }]
},{
    timestamps: true
})

const User = models.User || model("User", UserSchema)

export default User