import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import BasicPage from "./pages/basic";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<BasicPage />} />
          <Route path="basic" element={<BasicPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
