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
          thirdparty: true,
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
      if (user) {
        if (user.thirdparty) {
          const name = user.name.split(" ")[0];
          const lastName = user.name.split(" ")[1];
          const findUser = await prisma.user.findFirst({
            where: {
              email: user.email,
            },
          });
          if (!findUser) {
            const dbUser = await prisma.user.create({
              data: {
                name: name,
                lastName: lastName,
                email: user.email,
                password: "thirdPartyAuth",
              },
            });
            token.role = dbUser.rol;
            token.id = dbUser.id;
          } else {
            token.id = findUser.id;
            token.role = findUser.rol;
          }
          return token;
        }
        token.role = user.rol;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role;
        session.user.id = token.id;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
    signOut: "/",
  },
};
