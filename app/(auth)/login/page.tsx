"use client";

import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import GoogleSvg from "@/components/ui/google-svg";

export default function Login() {
  const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    // Aquí iría la lógica para autenticar al usuario manualmente
  };

  if (session) {
    redirect('/');
  }

  return (
    <div className="flex h-screen items-center justify-center text-[var(--foreground)]">
      <form
        onSubmit={handleSubmit}
        className="p-8 bg-[var(--box)] border border-[var(--border)] rounded-lg shadow-lg w-80 text-center"
      >
        <h1 className="text-xl font-semibold mb-6">Sign In to Todo</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 rounded border border-[var(--border)] bg-transparent text-[var(--foreground)] outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 rounded border border-[var(--border)] bg-transparent text-[var(--foreground)] outline-none"
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:opacity-80 transition"
        >
          Sign in
        </button>

        <div className="mt-4 flex items-center justify-center">
          <span className="text-sm">
            New User? <Link href="/signup" className="text-blue-700 hover:opacity-80 transition">Create an Account</Link>
          </span>
        </div>
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
