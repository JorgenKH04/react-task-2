type functionType = () => void;

export function LoginForm({
  submitHandler,
  username,
  setUsername,
  password,
  setPassword,
  account,
}: {
  submitHandler: functionType;
  username: string;
  password: string;
  account: boolean;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}) {
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
