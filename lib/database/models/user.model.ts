import {Schema, models, model} from "mongoose";

const UserSchema = new Schema({
    authId: { type: String, required: true, unique: true },
    email: { type: String, required: [true, "Email is required."], unique: [true, "This email address is taken."] },
    name: { type: String, required: true },
    photoUrl: { type: String, required: true },
    deletedAt: { type: Date }
},{
    timestamps: true
})

const User = models.User || model("User", UserSchema)

export default User