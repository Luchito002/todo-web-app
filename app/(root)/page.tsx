"use client"

import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  const handleClick = () => {
    // Verificar si la sesión tiene el accessToken y el id
    if (session) {
      console.log("Access Token:", session.accessToken);
      console.log("User ID:", session.user.id);
    } else {
      console.log("No session data found.");
    }
  };

  return (
    <main>
      <h1>Ver Tokens</h1>
      <button onClick={handleClick}>
        Ver Tokens
      </button>
    </main>
  );
}
