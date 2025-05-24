const API = process.env.NEXT_PUBLIC_API_URL;

export async function isUserExists(googleId: string): Promise<boolean> {
  try {
    const response = await fetch(`${API}/auth/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ googleId }),
    });

    if (response.ok) {
      const user = await response.json();
      console.log("User data from backend:", user);
      return true;
    }
    if (response.status === 404) return false;

    throw new Error(`Unexpected status: ${response.status}`);
  } catch (error) {
    console.error("Error checking user existence:", error);
    return false;
  }
}
