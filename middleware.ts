export {default} from "next-auth/middleware";

export const config = {
    matcher: ["/createReview/:path*"],
};