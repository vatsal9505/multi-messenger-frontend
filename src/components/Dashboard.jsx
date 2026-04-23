import { useState } from "react";
import axios from "axios";

function Dashboard() {
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState("");
  const [platform, setPlatform] = useState("ALL");

  const sendMessage = async () => {
    try {
      const response = await axios.post(
        "https://multi-messenger-backend-production.up.railway.app/sendMessage",
        {
          message: message,
          userId: Number(userId),
          platform: platform
        }
      );

      alert(response.data.message);
      setMessage("");
    } catch (error) {
      alert("Failed to send message");
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div style={{ padding: "30px", color: "white" }}>
      <h1>Multi Messenger Dashboard</h1>

      <button onClick={logout}>Logout</button>

      <h2 style={{ marginTop: "30px" }}>Send Message</h2>

      <input
        type="text"
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: "300px", padding: "10px", marginBottom: "15px" }}
      />

      <br />

      <input
        type="number"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        style={{ width: "300px", padding: "10px", marginBottom: "15px" }}
      />

      <br />

      <select
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
        style={{ width: "320px", padding: "10px", marginBottom: "20px" }}
      >
        <option value="ALL">All Platforms</option>
        <option value="Telegram">Telegram</option>
        <option value="Discord">Discord</option>
      </select>

      <br />

      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default Dashboard;