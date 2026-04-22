const API_BASE = "https://multi-messenger-backend-production.up.railway.app";

export const loginUser = async (payload) => {
  const response = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return await response.json();
};

export const sendMessageApi = async (payload) => {
  const response = await fetch(`${API_BASE}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return await response.json();
};