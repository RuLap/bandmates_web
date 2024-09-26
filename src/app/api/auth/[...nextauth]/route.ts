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
      name: "Credentials",
      type: "credentials",
      credentials: {
        username: { },
        password: { },
      },
    
      async authorize(credentials) {
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
    async jwt({ token, user }) {
      if(user) {
        token.user = user;
      }

      return Promise.resolve(token);
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    }
  }
});

export { handler as GET, handler as POST };