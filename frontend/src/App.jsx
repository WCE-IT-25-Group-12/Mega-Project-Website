import { useEffect } from "react";
import { useSelector } from "react-redux"; // Import useSelector from react-redux
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./App.css";
import Home from "./views/Home";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import { Route, Routes } from "react-router-dom";
import Contact from "./views/Contact";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn && window.location.pathname === "/dashboard") {
      navigate("/home");
    }
  }, [isLoggedIn, navigate]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route exact path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
