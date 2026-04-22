import { useState } from "react";
import "./Login.css";
import { loginUser } from "../api";

function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser({
        email: username,
        password: password,
      });

      if (data.token) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        alert("Login successful");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      alert("Invalid username or password");
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <h1>Multi Messenger Login</h1>

      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;