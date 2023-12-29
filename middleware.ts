import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: [
        '/',
        '/api/webhook/clerk'
    ],
    ignoredRoutes: [
        '/api/webhook/clerk',
        '/api/webhook/stripe',
        '/api/uploadthing'
    ]
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
