'use server'

import { connectToDatabase } from "../database/db"
import User from "../database/models/user.model"
import { CreateUser } from "../../types/user"
import { handleError } from "../utils"

export const createUser = async (user: CreateUser) => {
    try {
        await connectToDatabase()

        const newUser = await User.create(user)

        return newUser._id
    } catch (err) {
        handleError(err)
        return null
    }
}

// export async function updateUser (authId: string, user: UpdateUser) {
//     try {
//         await connectToDatabase()

//         const updatedUser = await User.findOneAndUpdate({ authId }, user, { new: true })

//         return !!updatedUser
//     } catch (error) {
//         handleError(error)
//     }
// }

// export async function deleteUser (authId: string) {
//     try {
//         await connectToDatabase()

//         const deleteUser = await User.findOneAndUpdate({ authId }, { deletedAt: new Date() }, { new: true })

//         return !!deleteUser
//     } catch (error) {
//         handleError(error)
//     }
// }