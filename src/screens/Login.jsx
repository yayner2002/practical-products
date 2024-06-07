const Login = () => {
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
