import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";
import { Profile, Account, Session } from "next-auth";
import connectDB from "@/db";
import User, { IUser } from "@/models/user.model";
import { JWT } from "next-auth/jwt";
import { Adapter, AdapterUser } from "next-auth/adapters";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
  callbacks: {
    async jwt({
      token,
      user,
      account,
    }: {
      token: JWT;
      user: AdapterUser;
      account: Account;
    }) {
      if (account && user) {
        await connectDB();
        const existUser = await User.findOne({ email: user.email });
        if (existUser) {
          token.userId = existUser._id.toString();
        }
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token.userId) {
        session.user.id = token.userId;
      }
      return session;
    },
    async signIn({ profile, account }: { profile: Profile; account: Account }) {
      console.log(account);
      if (account.provider == "google") {
        try {
          await connectDB();
          console.log("HELLO FROM SIGNIN FUNCTION");
          const existingUser = await User.findOne({ email: profile.email });
          if (existingUser) {
            return true;
          }
          const newUser: IUser = await User.create({
            name: profile.name?.trim(),
            email: profile.email,
            avatar: profile.image,
          });
          return true;
        } catch (error: any) {
          console.log("ERROR WHILE SIGNIN", error);
          return false;
        }
      }
      return false;
    },
  },
};
