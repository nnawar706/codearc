import { NextResponse } from "next/server";
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

export async function POST(request: Request) {
    const body = await request.json();

    const { secret_code } = body;

    if (secret_code !== process.env.SECRET_CODE) {
        return NextResponse.json(
            {
                status: false,
                message: "Secret code does not match.",
            },
            {
                status: 401,
            }
        );
    }

    const secret = process.env.JWT_SECRET || "";
    const cookie = process.env.COOKIE_NAME || "";
    const max_age = 60 * 60 * 24 * 7;

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
        message: "Welcome aboard, Nafisa!",
        access_token: token
    }, {
        status: 200,
        headers: { "Set-Cookie": serialized }
    });
}