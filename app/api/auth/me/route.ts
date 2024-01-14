import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    const cookie_name = process.env.COOKIE_NAME || ""
    const secret = process.env.JWT_SECRET || ""
    const cookieStore = cookies()

    const token = cookieStore.get(cookie_name)

    if (!token) {
        return NextResponse.json({ 
            status: false,
            message: 'protected content'
        }, { status: 401 })
    }

    const { value } = token;

    try {
        verify(value, secret)

        return NextResponse.json({
            status: true
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            status: false,
            message: 'Something went wrong'
        }, { status: 400 })
    }
}