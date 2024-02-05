'use server'

import { connectToDatabase } from "../database/db"
import Blog from '../database/models/blog.model'
import { CreateBlog, getBlogsParams } from '../../types/blog'
import Tag from "../database/models/tag.model"
import BlogStatus from "../database/models/blog-status.model"

const getStatusById = async (id: string) => {
    return BlogStatus.findById(id)
}

const populateBlogs = (query: any) => {
    return query
        .populate({ path: "status", model: BlogStatus, select: '_id, name' })
        .populate({ path: "tags", model: Tag, select: '_id, name'})
}

export async function getAll({ title, limit = 6, page, status, tag }: getBlogsParams) {
    try {
        await connectToDatabase()

        const titleParam = title ? { title: {$regex: title, $options: 'i'} } : {}
        
        const statusParam = status ? await getStatusById(status) : null

        const queryParams = {
            $and: [titleParam, statusParam ? { status: statusParam._id } : {}]
        }

        const skipAmount = (Number(page) - 1) * limit

        const blogsQuery = Blog.find(queryParams)
                            .sort({ createdAt: 'desc' })
                            .skip(skipAmount)
                            .limit(limit)

        const data = await populateBlogs(blogsQuery)
        const count = await Blog.countDocuments(queryParams)
        
        return {
            data: JSON.parse(JSON.stringify(data)),
            totalPages: Math.ceil(count / limit),
            totalData: count
        }
    } catch (err: any) {
        return err.message
    }
}

export async function getOne(id: string) {
    try {
        await connectToDatabase()

        const blog = Blog.findByIdAndUpdate(
            id,
            { $inc: { readers: 1 } },
            { new: true }
        )

        const data = await populateBlogs(blog)

        return data
    } catch (error) {
        return null
    }
}

export const createBlog = async ({ title, subtitle, detail, photoUrl, tags }: CreateBlog) => {
    try {
        await connectToDatabase()

        const newBlog = await Blog.create({
            user: process.env.USER_ID || "",
            title: title,
            subtitle: subtitle,
            detail: detail,
            photoUrl: photoUrl,
            status: "659a7ea34d148227282d3fcb",
            tags: tags.map((tag) => tag)
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