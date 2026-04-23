import { useState } from "react";
import { sendMessageApi } from "../api";

function SendMessage() {
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState("");
  const [platform, setPlatform] = useState("telegram");

  const handleSend = async (e) => {
    e.preventDefault();

    try {
      const data = await sendMessageApi({
        message: message,
        userId: Number(userId),
        platform: platform
      });

      alert(data.message || "Message sent successfully");
    } catch (error) {
      alert("Failed to send message");
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Send Message</h2>

      <form onSubmit={handleSend}>
        <textarea
          placeholder="Enter message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />

        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        >
          <option value="telegram">Telegram</option>
          <option value="discord">Discord</option>
        </select>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default SendMessage;