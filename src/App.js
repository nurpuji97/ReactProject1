import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailCard from "./pages/DetailCard";

function App() {
  const isDarkMode = useSelector((state) => state.dark.isDarkMode);

  return (
    <div
      className={`${isDarkMode ? "dark" : "light"} dark:bg-primary-shades-500 `}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Card/:id" element={<DetailCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
