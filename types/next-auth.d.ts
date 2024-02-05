import "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            email: string,
            id: string,
            token: string,
            photo: string,
            firstName: string,
            lastName: string
        }
    }
}