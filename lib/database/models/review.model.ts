import {Schema, models, model} from "mongoose";

const ReviewSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    rating: { type: Number, required: true },
    review: { type: String },
}, {
    timestamps: true,
})

const Review = models.Review || model("Review", ReviewSchema)

export default Review