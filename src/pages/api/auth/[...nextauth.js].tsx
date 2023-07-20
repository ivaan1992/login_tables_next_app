import NextAuth from "next-auth";
import { getServerSession,
    type NextAuthOptions,
    type DefaultSession,
    type Session,
    User,
  } from "next-auth";

import Credentials from "next-auth/providers/credentials";

export const authOptions:NextAuthOptions = {
    callbacks: {
        session: ({ session }) => ({
            ...session,
        })
    },
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
              username: { label: "Username", type: "text", placeholder: "User name" },
              password: { label: "Password", type: "password", placeholder: "Password"},
            },
            async authorize(credentials) {
              const user = await Prisma.user.findFirst({
                where: {
                  name: credentials?.username,
                },
              });
      
              const correctPassword = await comparePassword(credentials?.password, user?.password);
      
              if (user && correctPassword) {
                return user;
              }
            },
          }),
    ],
}

export default NextAuth(authOptions);