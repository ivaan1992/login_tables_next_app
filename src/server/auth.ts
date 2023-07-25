import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from './db';
import { type NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GitHubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
    callbacks: {
      session: ({ session }) => ({
        ...session,
      }),
    },
    adapter: PrismaAdapter(prisma),
    providers: [
      GitHubProvider({
        clientId: process.env.Client_GH as string,
        clientSecret: process.env.SECRET_GH as string,
      }),
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
       
          async authorize(credentials: any) {
            try {
              const user = await prisma.user.findFirst({
                where: {
                  name: credentials?.username,
                },
              });
            
              if (user && user.password == credentials?.password) {
                return user as any;
              }

              return null;
            } catch (error: any) {
              console.log(error);
            }
          }
      }),
    ],
    session: {
        strategy: 'jwt',
    },

    pages: {

    }

};



