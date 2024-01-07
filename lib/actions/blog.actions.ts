'use server'

import { NextResponse } from 'next/server'

import { handleError } from "../utils"
import { connectToDatabase } from "../database/db"
import User from "../database/models/user.model"
import Blog from '../database/models/blog.model'
import { CreateBlog } from '../../types/blog'

export async function createBlog({ userId, blog}: CreateBlog) {
    try {
        await connectToDatabase()

        const user = await User.findById(userId)

        let error = 'No valid user found'
        
        if (!user)
        {
            return {
                status: false,
                message: error,
            }
        }

        const newBlog = await Blog.create({
            user: userId,
            ...blog,
            status: "659a7ea34d148227282d3fcb"
        })

        return { 
            status: true,
            message: newBlog._id
        }
    } catch (err) {
        return { 
            status: false,
            message: err
        }
    }
}

export async function updateBlog({ userId, blog}: CreateBlog) {
    try {
        await connectToDatabase()

        const blogToUpdate = await Blog.findById(blog._id)

        if (!blogToUpdate)
        {
            return NextResponse.json({ 
                status: false,
                message: 'No valid blog found.'
            }, { status: 400 })
        }

        if (blogToUpdate.user.toHexString() !== userId)
        {
            return NextResponse.json({ 
                status: false,
                message: 'You are not allowed to make changes.'
            }, { status: 403 })
        }

        await Blog.findByIdAndUpdate(
            blog._id,
            { ...blog }
        )

        return NextResponse.json({ 
            status: true,
            message: 'Blog updated.'
        }, { status: 200 })
    } catch (err)
    {
        handleError(err)
    }
}