import { setSession } from "@/services/authentication/cookie-session";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/auth/login"
  },

  providers: [
    CredentialsProvider({
      credentials: {
        username: { },
        password: { },
      },
    
      async authorize(credentials) {
        if(!credentials?.username || !credentials.password) {
          return null;
        }
        const { username, password } = credentials as {
          username: string;
          password: string;
        }
        const res = await fetch("https://api.bandmates.ru/api/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password
          }),
        });
        const user = await res.json();
        if(res.ok && user) {
          return user;
        }
        else {
          return null;
        }
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if(user) {
        token.user = user;
      }

      return token;
    },
    session: async ({ session, token }) => {
      if(token) {
        session.user = token.user;
      }
      return session;
    }
  },
});

export { handler as GET, handler as POST };