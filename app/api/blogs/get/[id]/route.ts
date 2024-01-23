import { NextRequest, NextResponse } from "next/server";
import { getOne } from "../../../../../lib/actions/blog.actions";

export async function GET(request: NextRequest, id: any) {
    const { params } = id;

    const blogId = params.id

    const data = await getOne(blogId);

    return NextResponse.json({
        status: true,
        data: data
    }, {status: 200})
}