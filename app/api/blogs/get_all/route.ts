import { NextRequest, NextResponse } from 'next/server'
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";

import { createBlog, getAll } from '../../../../lib/actions/blog.actions'

export async function GET(request: NextRequest) {
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

        let query = {
            query: null, 
            limit: 6, 
            page: 1, 
            status: null, 
            tag: null
        }

        const data: any = await getAll(query)

        return NextResponse.json({ 
            status: true,
            message: "Articles fetched.",
            data: data.data,
            totalData: data.totalData
        }, { status: 200 })
    } catch (err)
    {
        return NextResponse.json({
            status: false,
            message: err
        }, { status: 500 })
    }
}