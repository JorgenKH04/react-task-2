import { useState } from "react";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [account, setAccount] = useState(false);

  function submitHandler() {
    if (!username) return;
    if (!password) return;
    setAccount(true);

    // if($("#username").value)
    // setUsername($("#username"))
  }

  return (
    <>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          id="username"
        />
        <label htmlFor="password">Password:</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          id="password"
        />
        <button onClick={submitHandler} type="button">
          Submit
        </button>
      </form>
      <div>
        {account ? (
          <>
            <h4>{username}</h4>
            <h4>{password}</h4>
          </>
        ) : null}
      </div>
    </>
  );
}
