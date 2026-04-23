import { useState } from "react";
import { sendMessageApi } from "../api";

function SendMessage() {
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState("");
  const [platform, setPlatform] = useState("ALL");

  const handleSend = async (e) => {
    e.preventDefault();

    try {
      const data = await sendMessageApi({
        message: message,
        userId: Number(userId),
        platform: platform,
      });

      alert(data.message || "Message sent successfully");

      setMessage("");
      setUserId("");
      setPlatform("ALL");
    } catch (error) {
      alert("Failed to send message");
      console.error(error);
    }
  };

  return (
    <div className="send-container">
      <h2>Send Message</h2>

      <form onSubmit={handleSend}>
        <textarea
          placeholder="Enter message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows="6"
          cols="50"
        />

        <br />
        <br />

        <input
          type="number"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />

        <br />
        <br />

        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        >
          <option value="ALL">All Platforms</option>
          <option value="Telegram">Telegram</option>
          <option value="Discord">Discord</option>
        </select>

        <br />
        <br />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default SendMessage;