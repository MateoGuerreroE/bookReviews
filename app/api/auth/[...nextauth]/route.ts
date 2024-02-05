import axios from "axios";
import { log } from "console";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

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
                    const {data} = await axios.post(process.env.BASE_URL + "User/login", {email: credentials?.username, password: credentials?.password})
                    if (data) return data
                    else return null
                } catch (error) {
                    return null;
                }
            }
          })
    ]
})

export {handler as GET, handler as POST}