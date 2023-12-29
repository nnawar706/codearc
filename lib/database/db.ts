import mongoose from 'mongoose'
import {defaultMongooseConnection} from "../../demo/constants/General";

const MONGODB_URI = process.env.MONGODB_URI
let cachedConnection = (global as any).mongoose || defaultMongooseConnection

export const connectToDatabase = async () => {
    if (cachedConnection.conn) return cachedConnection.conn

    if (!MONGODB_URI) throw new Error("MONGODB_URI Not Found.")

    cachedConnection.promise = cachedConnection.promise || mongoose.connect(MONGODB_URI, {
        dbName: "CodeArc",
        bufferCommands: false
    })

    cachedConnection.conn = await cachedConnection.promise

    return cachedConnection.conn
}