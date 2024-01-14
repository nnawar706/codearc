import { NextResponse } from "next/server";
import { serialize } from "cookie";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { sign } from "jsonwebtoken";

export async function GET() {
    const cookie = process.env.COOKIE_NAME || "";
    const secret = process.env.JWT_SECRET || "";
    const max_age = 60 * 60 * 24 * 7;

    const cookieStore = cookies()

    const token = cookieStore.get(cookie)

    if (!token) {
        return NextResponse.json({ 
            status: false,
            message: 'protected content'
        }, { status: 401 })
    }

    const { value } = token;

    try {
        verify(value, secret)

        cookies().delete(cookie)

        const token = sign(
            {
                id: process.env.USER_ID,
            },
            secret,
            {
                expiresIn: max_age,
            }
        );

        const serialized = serialize(cookie, token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: max_age,
            path: "/",
        });

        return NextResponse.json({
            status: true,
            access_token: token
        }, { 
            status: 200,
            headers: { "Set-Cookie": serialized }
        })
    } catch(error) {
        return NextResponse.json({
            status: false,
            message: "Protected content"
        }, { 
            status: 403
        })
    }
}