import axios from "axios";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "email",
      credentials: {
        username: {
          label: "Email",
          type: "email",
          placeholder: "example@mail.com",
        },
        password: { label: "Contraseña", type: "password" },
      },
      async authorize(credentials) {
        try {
          const { data } = await axios.post(
            process.env.NEXT_BACKEND_URL + "User/login",
            { email: credentials?.username, password: credentials?.password }
          );
          if (data) return data;
          else return null;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update") {
        return { ...user, ...session };
      } else return { ...user, ...token };
    },
    session({ session, token }) {
      session.user = {
        email: token.email as string,
        id: token.id as string,
        firstName: token.firstName as string,
        lastName: token.lastName as string,
        photo: token.photo as string,
      };
      return session;
    },
  },
});

export { handler as GET, handler as POST };
