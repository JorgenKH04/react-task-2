import { useState } from "react";

import "./css/index.css";
import { Counter } from "./components/counter";
import { LoginForm } from "./components/login-form";
import { Carousel } from "./components/carousel";
import { MainLayout } from "./layout/main-layout";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [account, setAccount] = useState(false);

  function submitHandler() {
    if (!username) return;
    if (!password) return;
    setAccount(true);
  }
  return (
    <>
      <MainLayout>
        <div className="top-div">
          <Counter />
          <LoginForm
            submitHandler={submitHandler}
            password={password}
            username={username}
            account={account}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        </div>
        <Carousel />
      </MainLayout>
    </>
  );
}

export default App;
