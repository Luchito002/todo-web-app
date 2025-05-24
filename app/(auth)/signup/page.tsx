"use client";

import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";
import { signUpUser } from "@/app/lib/authRequests";
import GoogleSvg from "@/components/ui/google-svg";

export default function SignUp() {
  const { data: session, update } = useSession();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, username, password, profileImage });
    const user = await signUpUser({
      email,
      username,
      password,
      profileImage: "test"
    });

    if (user) {
      const response = await signIn("credentials", {
        name: username,
        email,
        password,
        redirect: false,
      });

      if (!response?.error) {
        console.log("Sesión iniciada correctamente");
      }
    }
    //router.push('/');
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImage(file);
    }
  };

  if (session) {
    router.push('/');
  }

  return (
    <div className="flex h-screen items-center justify-center text-[var(--foreground)]">
      <form
        onSubmit={handleSubmit}
        className="p-8 bg-[var(--box)] border border-[var(--border)] rounded-lg shadow-lg w-80 text-center"
      >
        <h1 className="text-xl font-semibold mb-6">Sign Up on Todo</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 rounded border border-[var(--border)] bg-transparent text-[var(--foreground)] outline-none"
        />

        <input
          type="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-4 rounded border border-[var(--border)] bg-transparent text-[var(--foreground)] outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 rounded border border-[var(--border)] bg-transparent text-[var(--foreground)] outline-none"
        />

        <input
          type="file"
          onChange={handleImageChange}
          accept="image/*"
          className="w-full p-2 mb-4 rounded border border-[var(--border)] bg-transparent text-[var(--foreground)] outline-none"
        />

        <Button
          className="bg-green-500 border-0"
          type="submit"
          label="Sign in"
        />


        <div className="mt-4 flex items-center justify-center">
          <span className="text-gray-400 text-sm">or</span>
        </div>

        <button
          type="button"
          onClick={() => signIn("google")}
          className="w-full flex items-center justify-center gap-2 border border-[var(--border)] bg-transparent text-[var(--foreground)] py-2 rounded-lg hover:bg-[var(--hover)] hover:text-white transition mt-4"
        >
          <GoogleSvg />
          Sign in with Google
        </button>
      </form>
    </div>
  );
}
