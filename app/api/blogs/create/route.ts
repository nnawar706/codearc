import { NextRequest, NextResponse } from 'next/server'
import { createBlog } from '../../../../lib/actions/blog.actions'

export async function POST(request: NextRequest) {
    try
    {
        const body: any = await request.json()

        const response = await createBlog({
            userId: body.userId,
            blog: {
                title: body.title,
                detail: body.detail,
                photoUrl: body.photoUrl
            }
        })

        if (response?.status) {
            return NextResponse.json({ 
                status: true,
                message: "New article created.",
                data: {
                    blogId: response?.message
                }
            }, { status: 201 })
        } else {
            return NextResponse.json({
                status: false,
                message: response?.message
            }, { status: 400 })
        }
    } catch (err)
    {
        return NextResponse.json({
            status: false,
            message: 'error'
        }, { status: 400 })
    }
}