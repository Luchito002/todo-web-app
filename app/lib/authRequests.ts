const API = process.env.NEXT_PUBLIC_API_URL;

export async function signUpUser(user: {
  email: string;
  username: string;
  password: string;
  profileImage?: string;
  oauthProvider?: string;
  oauthId?: string;
}) {
  try {
    const response = await fetch(`${API}/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  } catch (e) {
    console.error(e);
    return null
  }
}
