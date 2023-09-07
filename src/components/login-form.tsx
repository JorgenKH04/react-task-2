import { useState } from "react";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [account, setAccount] = useState(false);

  function submitHandler() {
    if (!username) return;
    if (!password) return;
    setAccount(true);
  }

  return (
    <div className="login-div">
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="string"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          id="username"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          id="password"
        />
        <button onClick={submitHandler} type="button">
          Submit
        </button>
      </form>
      <div className="account-info-div">
        {account ? (
          <>
            <h4>username: {username}</h4>
            <h4>password:{password}</h4>
          </>
        ) : null}
      </div>
    </div>
  );
}
