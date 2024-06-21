import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  


  return (
    <form>
      <h1>Login Page</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginBottom: "4px",
          marginTop: "4px",
        }}
      >
        <label htmlFor="email">Email:</label>
        <input
          onChange={handleEmail}
          value={email}
          style={{
            padding: "8px",
          }}
          type="email"
          placeholder="Enter Your Email..."
          name="email"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginBottom: "4px",
          marginTop: "4px",
        }}
      >
        <label htmlFor="password">Password:</label>
        <input
          value={password}
          onChange={handlePassword}
          style={{
            padding: "8px",
          }}
          type="password"
          placeholder="Enter Your Password..."
          name="password"
        />
      </div>

      <div>
        <button
          style={{
            marginBottom: "4px",
            marginTop: "10px",
            border: "2px solid #ccc",
            textAlign: "center",
          }}
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
