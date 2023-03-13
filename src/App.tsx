import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AsciiRendererPage from "./pages/ascii-renderer";
import BasicPage from "./pages/basic";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BasicPage />} />
        <Route path="basic" element={<BasicPage />} />
        <Route path="ascii-renderer" element={<AsciiRendererPage />} />
      </Routes>
    </Router>
  );
}

export default App;
