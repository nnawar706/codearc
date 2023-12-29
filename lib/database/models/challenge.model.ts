import {Schema, models, model} from "mongoose";

const ChallengeSchema = new Schema({
    title: { type: String, required: true, unique: true },
    detail: { type: String, required: true},
    photoUrl: { type: String, required: true },
})

const Challenge = models.Challenge || model("Challenge", ChallengeSchema)

export default Challenge