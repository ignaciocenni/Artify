import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import prisma from "../../db/client";
import { error } from "console";
export const options = {
  providers: [
    GoogleProvider({
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
          console.log("success");
          return user;
        } else throw new Error("Incorrect password!");
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
};
