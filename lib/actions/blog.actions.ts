'use server'

import { NextResponse } from 'next/server'

import { handleError } from "../utils"
import { connectToDatabase } from "../database/db"
import Blog from '../database/models/blog.model'
import { CreateBlog } from '../../types/blog'

export const createBlog = async ({ userId, title, detail, photoUrl }: CreateBlog) => {
    try {
        await connectToDatabase()

        const newBlog = await Blog.create({
            user: userId,
            title: title,
            detail: detail,
            photoUrl: photoUrl,
            status: "659a7ea34d148227282d3fcb"
        })

        return newBlog._id
    } catch (err) {
        return null
    }
}

// export async function updateBlog({ userId, blog}: CreateBlog) {
//     try {
//         await connectToDatabase()

//         const blogToUpdate = await Blog.findById(blog._id)

//         if (!blogToUpdate)
//         {
//             return NextResponse.json({ 
//                 status: false,
//                 message: 'No valid blog found.'
//             }, { status: 400 })
//         }

//         if (blogToUpdate.user.toHexString() !== userId)
//         {
//             return NextResponse.json({ 
//                 status: false,
//                 message: 'You are not allowed to make changes.'
//             }, { status: 403 })
//         }

//         await Blog.findByIdAndUpdate(
//             blog._id,
//             { ...blog }
//         )

//         return NextResponse.json({ 
//             status: true,
//             message: 'Blog updated.'
//         }, { status: 200 })
//     } catch (err)
//     {
//         handleError(err)
//     }
// }