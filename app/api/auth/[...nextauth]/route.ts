import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
  })],

  callbacks: {
    // async signIn({ user: { name, email, id } }) {
    //   if (typeof id !== 'string' || typeof email !== 'string' || (name && typeof name !== 'string')) {
    //     throw new Error("User data is incomplete or invalid.");
    //   }

    //   const existingUser = await isUserExists(id)

    //   if (!existingUser) {
    //     await postCreateUser({
    //       googleId: id,
    //       email: email,
    //       name: name ?? '',
    //     });
    //   }

    //   return true;
    // },

    async session({ session, token}) {
      session.user.id = token.id as string;
      session.accessToken = token.accessToken as string;
      return session;
    },

    async jwt({ token, account, user }) {
      if(user) {
        token.id = user.id;
      }
      if(account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
})

export { handler as GET, handler as POST };
