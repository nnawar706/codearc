import { NextRequest, NextResponse } from "next/server";
import { aboutMeData } from "../../../lib/actions/about.actions";

export async function GET(request: NextRequest) {
    const data = await aboutMeData()

    return NextResponse.json({
        status: true,
        data: data
    }, {status: 200})
}