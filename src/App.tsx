import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Main from "./components/Main/Main";
import PersonDetailed from "./components/PersonDetailed/PersonDetailed";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import FallBackComponent from "./components/FallBackComponent/FallBackComponent";

export default function App() {
  return (
    <Router basename="/rssReact">
      <ErrorBoundary fallback={<FallBackComponent />}>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route
            path="details/:name"
            element={<PersonDetailed />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}
