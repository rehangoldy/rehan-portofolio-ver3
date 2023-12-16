import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Introduction from "./Pages/Introduction";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
