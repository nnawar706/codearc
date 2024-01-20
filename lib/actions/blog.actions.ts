'use server'

import { connectToDatabase } from "../database/db"
import Blog from '../database/models/blog.model'
import { CreateBlog, getBlogsParams } from '../../types/blog'
import Tag from "../database/models/tag.model"
import { ITag } from "../../types/models"
import BlogTag from "../database/models/blog-tag.model"
import BlogStatus from "../database/models/blog-status.model"
import User from "../database/models/user.model"

const getStatusById = async (id: string) => {
    return BlogStatus.findById(id)
}

const populateBlogs = (query: any) => {
    return query
        .populate({ path: "status", model: BlogStatus, select: '_id, name' })
        .populate({ path: "user", model: User, select: '_id, name, email, photoUrl'})
}

export async function getAll({ query, limit = 6, page, status, tag }: getBlogsParams) {
    try {
        await connectToDatabase()

        const titleParam = query ? { title: {$regex: query, $options: 'i'} } : {}
        
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
    } catch (err) {
        return err
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
            status: "659a7ea34d148227282d3fcb"
        })

        const existingTags = await Tag.find({ name: {$in: tags} })

        const newTags = tags.filter((tag: string) => !existingTags.some((t) => t.name === tag))
        .map((tag: string) => ({ name: tag }))

        if (newTags.length > 0) {
            const createdTags = await Tag.insertMany(newTags)
            existingTags.push(...createdTags)
        }

        await Promise.all(
            existingTags.map(async (tag: ITag) => {
                await BlogTag.create({
                    blog: newBlog._id,
                    tag: tag._id,
                });
            })
        );

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