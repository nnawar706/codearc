import {Schema, models, model} from "mongoose";

const UserChallengeSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    challenge: { type: Schema.Types.ObjectId, ref: "Challenge" }
}, {
    timestamps: true,
})

const UserChallenge = models.Challenge || model("UserChallenge", UserChallengeSchema)

export default UserChallenge