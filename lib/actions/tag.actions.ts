'use server'

import { connectToDatabase } from "../database/db"
import Tag from "../database/models/tag.model"


export async function getAll() {
    try {
        await connectToDatabase()

        const data = await Tag.find()

        return JSON.parse(JSON.stringify(data))
    } catch (err: any) {
        return err.message
    }
}