import Image from "next/image";
import Button from "./button";
import Container from "./ui/containerr";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function UserProfileInfo() {
  const { data: session } = useSession();

  return (
    <Container>
      {session?.user ? (
        <div className="flex flex-col items-center justify-center text-center gap-2 px-8">
          <Image
            src={session.user.image}
            alt="Profile"
            width={64}
            height={64}
            className="rounded-full hover:cursor-pointer"
          />
          <span className="hover:cursor-pointer">{session.user.name}</span>

          <div className="flex flex-col">
            <Button onClick={() => signOut()} label="Sign out" type="button"/>
          </div>
        </div>
      ) : (
        <Link href="/login">
          Sign in
        </Link>
      )}
    </Container>
  )
}
