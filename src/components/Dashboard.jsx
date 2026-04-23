import { useEffect, useState } from "react";
import { fetchUsersApi, sendMessageApi } from "../api";

function Dashboard({ setToken }) {
  const [message, setMessage] = useState("");
  const [platform, setPlatform] = useState("ALL");
  const [users, setUsers] = useState([]);
  const [selectedUserIds, setSelectedUserIds] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const data = await fetchUsersApi();
      setUsers(data);
    } catch (error) {
      console.error("Failed to fetch users", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const handleUserChange = (e) => {
    const values = Array.from(e.target.selectedOptions, (option) =>
      Number(option.value)
    );
    setSelectedUserIds(values);
  };

  const handleSend = async (e) => {
    e.preventDefault();

    if (selectedUserIds.length === 0) {
      alert("Please select at least one user");
      return;
    }

    try {
      const data = await sendMessageApi({
        message: message,
        userIds: selectedUserIds,
        platform: platform,
      });

      alert(data.message || "Message sent successfully");
      setMessage("");
      setSelectedUserIds([]);
      setPlatform("ALL");
    } catch (error) {
      alert("Failed to send message");
      console.error(error);
    }
  };

  return (
    <div className="dashboard-container">
      <h1>Multi Messenger Dashboard</h1>

      <button onClick={handleLogout}>Logout</button>

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

        <label>Select Users:</label>
        <br />
        <select
          multiple
          value={selectedUserIds.map(String)}
          onChange={handleUserChange}
          style={{ width: "320px", height: "140px" }}
        >
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.id} - {user.fullName}
            </option>
          ))}
        </select>

        <br />
        <br />

        <label>Select Platform:</label>
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

export default Dashboard;
