import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "./db";
import bcrypt from "bcrypt";
import { Account, SessionStrategy, User } from "next-auth";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "email@email.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },
      authorize: async (credentials) => {
        if (!credentials) {
          return null;
        }
        const { email, password } = credentials;

        const user = await db.user.findUnique({
          where: {
            email,
          },
        });

        if (!user) return null;

        const userPassword = user.password;

        if (!userPassword) return null;

        const matchPassword = bcrypt.compareSync(password, userPassword);
        if (!matchPassword) return null;

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    register: "/auth/register",
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt" as SessionStrategy,
  },
  callbacks: {
    async signIn({ user, account }: { user: User; account: Account | null }) {
      if (account && account.provider === "google") {
        const userFound = await db.user.findUnique({
          where: {
            email: user.email!,
          },
        });

        if (!userFound) {
          await db.user.create({
            data: {
              email: user.email,
              // You can add other fields here if needed
            },
          });
        }
      }
      return true;
    },
  },
};

export default authOptions;
