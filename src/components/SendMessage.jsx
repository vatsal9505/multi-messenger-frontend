import { useState } from "react";
import { sendMessageApi } from "../api";

function SendMessage() {
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState("");
  const [platform, setPlatform] = useState("Telegram");

  const handleSend = async () => {
    const payload = {
      message: message,
      userId: Number(userId),
      platform: platform,
    };

    try {
      const response = await sendMessageApi(payload);
      alert(response.message || "Message sent successfully");
    } catch (error) {
      console.error("Send message error:", error);
      alert("Failed to send message");
    }
  };

  return (
    <div>
      <h2>Send Message</h2>

      <textarea
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <input
        type="number"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
        <option value="Telegram">Telegram</option>
        <option value="Discord">Discord</option>
        <option value="Slack">Slack</option>
        <option value="WhatsApp">WhatsApp</option>
      </select>

      <button onClick={handleSend}>Send Message</button>
    </div>
  );
}

export default SendMessage;