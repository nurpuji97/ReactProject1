import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const isDarkMode = useSelector((state) => state.dark.isDarkMode);

  return (
    <div
      className={`${isDarkMode ? "dark" : "light"} dark:bg-primary-shades-500 `}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
