import { createRoot } from "react-dom/client";

import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./styles/index.scss";

import { App } from "./App";
import { TodoProvider } from "./context/todoContext/todoContext";
import { FetchProvider, ToastProvider } from "./context";

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <TodoProvider>
    <ToastProvider>
      <FetchProvider>
        <App />
      </FetchProvider>
    </ToastProvider>
  </TodoProvider>
);
