import "./index.css";
import { Counter } from "./components/counter";
import { LoginForm } from "./components/login-form";
import { Carousel } from "./components/carousel";

function App() {
  return (
    <>
      <Counter />
      <LoginForm />
      <Carousel />
    </>
  );
}

export default App;
