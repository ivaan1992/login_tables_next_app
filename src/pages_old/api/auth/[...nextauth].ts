import { prisma } from "@/server/db";
import NextAuth from "next-auth";
import { type NextAuthOptions } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session }) => ({
      ...session,
    }),
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "User name" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        const user = await prisma.user.findFirst({
          where: {
            username: credentials?.username,
          },
        });

        if (user && user.password == credentials?.password) {
          return user as any;
        }

        return null;
      },
    }),
  ],
};

export default NextAuth(authOptions);
