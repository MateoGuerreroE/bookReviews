import "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            email: string,
            id: string,
            photo: string,
            firstName: string,
            lastName: string
        }
    }
}