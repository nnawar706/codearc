import {Schema, models, model} from "mongoose";

const TagSchema = new Schema({
    name: { type: String, required: true, unique: true},
})

const Tag = models.Tag || model("Tag", TagSchema)

export default Tag