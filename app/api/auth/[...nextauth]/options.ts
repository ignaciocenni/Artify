import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import prisma from "../../db/client";
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
        path: {
          type: "text",
        },
      },
      async authorize(credentials) {
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email,
          },
        });
        //caso de mail incorrecto
        if (credentials.email === user.email && credentials.password === user.password) {
          console.log("success");
          return user;
        } else return null;
      },
    }),
  ],
};
