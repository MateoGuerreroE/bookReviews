import axios from "axios";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import * as JWT from "jsonwebtoken";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "email",
            credentials: {
              username: { label: "Email", type: "email", placeholder: "example@mail.com" },
              password: { label: "Contraseña", type: "password" }
            },
            async authorize(credentials) {
                try {
                    const {data} = await axios.post(process.env.NEXT_BACKEND_URL + "User/login", {email: credentials?.username, password: credentials?.password})
                    if (data) return data
                    else return null
                } catch (error) {
                    return null;
                }
            }
          })
    ],
    callbacks: {
        async jwt({user, token}) {
            return {user, token}
        },
        async session({session, token}) {
            const localToken = (token.token as any).user;
            const data: any = JWT.verify(localToken, Buffer.from(process.env.NEXTAUTH_JWT as string, 'base64'))
            session.user = {email: data.email, id: data.id, photo: data.photo, firstName: data.firstName, lastName: data.lastName, token: localToken};
            return session;
        }
    }
})

export {handler as GET, handler as POST}