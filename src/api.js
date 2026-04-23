export const sendMessageApi = async (payload) => {
  const response = await fetch(`${API_BASE}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`
    },
    body: JSON.stringify(payload)
  });

  return await response.json();
};