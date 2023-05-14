import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./pages/Home";
import DetailCard from "./pages/DetailCard";
import Project from "./pages/Project";

function App() {
  const isDarkMode = useSelector((state) => state.dark.isDarkMode);

  let { id } = useParams();

  return (
    <div
      className={`${isDarkMode ? "dark" : "light"} dark:bg-primary-shades-500 `}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/:id" element={<DetailCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
