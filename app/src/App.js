import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Skeleton from "./pages/Skeleton";
import Login from "./pages/Login";
import Home from "./pages/home/Home";
import SettingsPage from './pages/SettingsPage';
import QuizPage from "./pages/quiz/QuizPage";
import QuestsPage from './pages/quests/QuestsPage';

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Skeleton />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/settings" element={<SettingsPage />} /> 
      <Route path="/quiz" element={<QuizPage />} /> 
      <Route path="/quests" element={<QuestsPage />} /> 
    </Routes>
  );
}
export default App;