import ReactDOM from "react-dom/client";
import App from "./App.tsx";

const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(<App />);
}
