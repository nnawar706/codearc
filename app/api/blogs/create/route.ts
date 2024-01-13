import { NextRequest, NextResponse } from 'next/server'
import { createBlog } from '../../../../lib/actions/blog.actions'

export async function POST(request: NextRequest) {
    try
    {
        const body: any = await request.json()

        const response = await createBlog({
            userId: body.userId,
            title: body.title,
            detail: body.detail,
            photoUrl: body.photoUrl
        })

        if (response) {
            return NextResponse.json({ 
                status: true,
                message: "New article created.",
                data: {
                    blogId: response
                }
            }, { status: 201 })
        } 
        else {
            return NextResponse.json({
                status: false,
                message: 'An unexpected error occurred',
            }, { status: 400 })
        }
    } catch (err)
    {
        return NextResponse.json({
            status: false,
            message: err
        }, { status: 500 })
    }
}