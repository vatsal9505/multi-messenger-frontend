import SendMessage from "./SendMessage";

function Dashboard({ token, setToken }) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <div>
      <h1>Multi Messenger Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
      <SendMessage token={token} />
    </div>
  );
}

export default Dashboard;