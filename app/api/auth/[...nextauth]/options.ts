import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import prisma from "../../db/client";
export const options = {
  providers: [
    GoogleProvider({
      profile(profile: GoogleProfile) {
        return {
          ...profile,
          rol: "USER",
          image: profile.picture,
          id: profile.sub,
        };
      },
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),

    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials) {
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email,
          },
        });
        if (!user) throw new Error("Incorrect email!");
        if (credentials.password === user.password) {
          return user;
        } else throw new Error("Incorrect password!");
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.rol;
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
    signOut: "/",
  },
};
