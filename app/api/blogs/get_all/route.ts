import { NextRequest, NextResponse } from 'next/server'

import { getAll } from '../../../../lib/actions/blog.actions'
import { getBlogsParams } from '../../../../types/blog'

export async function GET(request: NextRequest) {
    try
    {
        const { title, page, status, tag } = Object.fromEntries(request.nextUrl.searchParams)

        let query: getBlogsParams = {
            title: title, 
            limit: 6, 
            page: parseInt(page), 
            status: status || null,
            tag: tag || null
        }

        const data: any = await getAll(query)

        return NextResponse.json({ 
            status: true,
            message: "Articles fetched.",
            data: data.data,
            totalData: data.totalData
        }, { status: 200 })
    } catch (err: any)
    {
        return NextResponse.json({
            status: false,
            message: err.message
        }, { status: 500 })
    }
}