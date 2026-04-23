const API_BASE = "http://localhost:8080";

export const loginUser = async (payload) => {
  const response = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  return await response.json();
};

export const sendMessageApi = async (payload) => {
  const response = await fetch(`${API_BASE}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  return await response.json();
};

export const fetchUsersApi = async () => {
  const response = await fetch(`${API_BASE}/users`);
  return await response.json();
};