import React, { useState } from "react";
import { Box, Typography, TextField, IconButton, Button } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "../redux/slices/authSlice";
import Navbar from "../components/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = { email, password };
    console.log("Form submitted with data:", formData);

    if (email === "swara@gmail.com" && password === "swara") {
      dispatch(setIsLoggedIn(true));
      navigate("/home");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <Box sx={{ height: "100vh" }}>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80%",
        }}
      >
        <Box
          sx={{
            padding: "4rem 3rem",
            borderRadius: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Typography variant="h3" sx={{ marginBottom: "1rem" }}>
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "1rem" }}
              InputProps={{
                style: {
                  backgroundColor: "white",
                },
              }}
              InputLabelProps={{
                style: {
                  color: "black",
                },
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "1rem" }}
              InputProps={{
                style: {
                  backgroundColor: "white",
                },
                endAdornment: (
                  <IconButton
                    position="end"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
              InputLabelProps={{
                style: {
                  color: "black",
                },
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                type="submit"
                style={{
                  backgroundColor: "#010c24",
                  color: "#fff",
                  padding: "0.5rem 2rem",
                  borderRadius: "0.5rem",
                  width: "100%",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <Typography
                  variant="p"
                  sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
                >
                  Login
                </Typography>
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
