import { postSignUpUser } from "@/app/lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export default async function handler(req:NextApiRequest, res: NextApiResponse) {
  if(req.method === 'POST') {
    const {email, username, password} = req.body;

    const newUser = await postSignUpUser({
      email,
      username,
      password,
      profileImage: 'test'
    });

    if(newUser) {
      const session = await getSession({req})
      if(session) {
        session.user.name = username;

        res.status(200).json({ user: newUser});
      } else {
        res.status(401).json({ error: 'No session found'})
      }
    } else {
      res.status(400).json({ error: 'Failed to register user'})
    }
  } else {
    res.status(405).json({ error: 'Method not allowed'})
  }
}
