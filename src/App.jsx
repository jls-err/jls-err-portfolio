import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AllProjects from "./Pages/AllProjects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<AllProjects />} />
      <Route path="/cv" element={<AllProjects />} />
      <Route path="*" element={<AllProjects />} />
    </Routes>
  );
}

export default App;