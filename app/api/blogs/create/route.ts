import { NextRequest, NextResponse } from 'next/server'
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";

import { createBlog } from '../../../../lib/actions/blog.actions'

export async function POST(request: NextRequest) {
    try
    {
        const cookie_name = process.env.COOKIE_NAME || ""
        const cookieStore = cookies()

        const token = cookieStore.get(cookie_name)

        if (!token) {
            return NextResponse.json({ 
                status: false,
                message: 'protected content'
            }, { status: 401 })
        }

        const body: any = await request.json()

        const response = await createBlog({
            title: body.title,
            subtitle: body.subtitle,
            detail: body.detail,
            photoUrl: body.photoUrl,
            tags: body.tags
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