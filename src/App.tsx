import "./assets/css/App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Demo from "./demo";
import Button from "@mui/material/Button";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Demo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

function About() {
  // ボタンを導入してみた
  return (
    <div>
      <Button variant="contained">Hello World</Button>
    </div>
  );
}

function Users() {
  return <h2>Users</h2>;
}
