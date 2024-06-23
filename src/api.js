const LOGIN_URL = "https://desafio-backend-olsr.onrender.com/auth/login";

export const login = async (email, password) => {
  const response = await fetch(LOGIN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
}
