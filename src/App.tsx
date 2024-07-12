import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/HomePage/HomePage";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import FallBackComponent from "./components/FallBackComponent/FallBackIComponent";

export default function App() {
  return (
    <Router basename="/rssReact">
      <ErrorBoundary fallback={<FallBackComponent />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}
