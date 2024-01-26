import { NextRequest, NextResponse } from 'next/server'

import { getAll } from '../../../../lib/actions/tag.actions'

export async function GET() {
    try
    {
        const data: any = await getAll()

        return NextResponse.json({ 
            status: true,
            message: "Tags fetched.",
            data: data,
        }, { status: 200 })
    } catch (err: any)
    {
        return NextResponse.json({
            status: false,
            message: err.message
        }, { status: 500 })
    }
}