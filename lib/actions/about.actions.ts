'use server'

import { connectToDatabase } from "../database/db"
import Blog from "../database/models/blog.model"

export async function aboutMeData() {
    try {
        await connectToDatabase()

        const blogCount = await Blog.countDocuments()
        const blogDraftCount = await Blog.countDocuments({ status: '659a7ea34d148227282d3fcb' })

        return {
            total_blog_count: blogCount,
            total_draft_count: blogDraftCount
        }
    } catch (err: any) {
        return err.message
    }
}