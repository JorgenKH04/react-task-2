import "./css/index.css";
import { Counter } from "./components/counter";
import { LoginForm } from "./components/login-form";
import { Carousel } from "./components/carousel";
import { MainLayout } from "./layout/main-layout";

function App() {
  return (
    <>
      <MainLayout>
        <div className="top-div">
          <Counter />
          <LoginForm />
        </div>
        <Carousel />
      </MainLayout>
    </>
  );
}

export default App;
