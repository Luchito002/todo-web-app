"use client";

import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="w-5 h-5"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
            />
            <path
              fill="#FBBC05"
              d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
            />
            <path
              fill="#34A853"
              d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
            />
          </svg>
          Sign in with Google
        </button>
      </form>
    </div>
  );
}
