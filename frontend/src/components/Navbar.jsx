import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "../views/Dashboard";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "../redux/slices/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleHome = () => {
    // console.log("Home button clicked");
    navigate("/");
  };
  const handleLogin = () => {
    // console.log("Login button clicked");
    navigate("/login");
  };
  const handleLogout = () => {
    // console.log("Logout button clicked");
    dispatch(setIsLoggedIn(false));
    navigate("/");
  };
  return (
    <>
      <Box sx={{ flexGrow: 1, margin: "0" }}>
        <AppBar
          position="static"
          sx={{
            padding: "0.5rem 2rem",
            boxShadow: "none",
          }}
        >
          <Toolbar>
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, cursor: "pointer" }}
              onClick={handleHome}
            >
              IntrusionDetect
            </Typography>

            <Box>
              {!isLoggedIn && (
                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  onClick={handleLogin}
                >
                  Login
                </Button>
              )}
              {isLoggedIn && (
                <Link to="/home" style={{ textDecoration: "none" }}>
                  <Button sx={{ color: "#fff", marginLeft: "1rem" }}>
                    Home
                  </Button>
                </Link>
              )}
              {isLoggedIn && (
                <Link to="/dashboard" style={{ textDecoration: "none" }}>
                  <Button sx={{ color: "#fff", marginLeft: "1rem" }}>
                    Dashboard
                  </Button>
                </Link>
              )}
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <Button sx={{ color: "#fff", marginLeft: "1rem" }}>
                  Contact US
                </Button>
              </Link>
              {isLoggedIn && (
                <Link to="/home" style={{ textDecoration: "none" }}>
                  <Button
                    variant="filled"
                    size="large"
                    sx={{
                      marginLeft: "1rem",
                      border: "1px solid #010c24",
                      color: "#010c24",
                    }}
                    onClick={handleLogout}
                  >
                    Log Out
                  </Button>
                </Link>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
