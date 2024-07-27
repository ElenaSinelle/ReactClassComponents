import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import MainPage from "./components/MainPage/MainPage";
import PersonDetailed from "./components/PersonDetailed/PersonDetailed";
import { ThemeProvider } from "./contexts/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Router basename="/rssReact">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="details/:name"
            element={<PersonDetailed />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
