import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      image: string;
    };
    accessToken: string | undefined;
  }

  interface JWT {
    id: string;
    accessToken: string | undefined;
  }
}
