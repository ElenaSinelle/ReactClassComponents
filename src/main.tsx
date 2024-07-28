import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.tsx";
import FallBackComponent from "./components/FallBackComponent/FallBackComponent.tsx";

import { Provider } from "react-redux";
import { store } from "./store/store.ts";

ReactDOM.createRoot(
  document.getElementById("root")!,
).render(
  <Provider store={store}>
    <ErrorBoundary fallback={<FallBackComponent />}>
      <App />
    </ErrorBoundary>
  </Provider>,
);
