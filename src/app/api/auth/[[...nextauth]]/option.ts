import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { AuthOptions, DefaultSession } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/libs/prisma";
import bcryptjs from "bcryptjs";

declare module "next-auth" {
  interface User {
    id: string;
    username: string;
    role: string;
  }
  interface Session extends DefaultSession {
    user: {
      id: string;
      username: string;
      role: string;
      image: string;
    } & DefaultSession["user"];
  }
}

export const authOption: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET!,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("invalid credentials");
        }
        const user: any = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user.password) {
          throw new Error("User not exists");
        }

        if (!user.isVerified) {
          throw new Error("Email is not active yet");
        }

        const isPasswordValid = await bcryptjs.compare(
          credentials.password,
          user?.password!
        );

        if (!isPasswordValid) {
          throw new Error("invalid Credentials");
        }
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account?.provider == "credentials") {
        token.email = user.email;
        token.id = user.id;
        token.role = user.role;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id as string,
          email: token.email,
          image: token.picture!,
          role: token.role as string,
          username: token.username as string,
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
