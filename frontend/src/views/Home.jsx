import React from "react";
import Navbar from "../components/Navbar";
import { Box, Button, Typography } from "@mui/material";
import one from "../assets/one.png";

const Home = () => {
  return (
    <>
      <Box sx={{ margin: 0 }}>
        <Navbar />
        <Box
          sx={{
            padding: "3rem",
            margin: "3rem",
            border: "2px solid #808080",
            borderRadius: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ margin: "1rem 5rem 1rem 1rem", paddingBottom: "2rem" }}>
              <Typography
                variant="h3"
                component="div"
                sx={{ textAlign: "left", marginBottom: "2rem" }}
              >
                Welcome to your personal <br />
                Intrusion Detection System
              </Typography>
              <Typography
                variant="body1"
                component="div"
                sx={{ textAlign: "left" }}
              >
                This is the home page of the Intrusion Detection System. This is
                the home page of the Intrusion Detection System. This is the
                home page of the Intrusion Detection System. This is the home
                page of the Intrusion Detection System. This is the home page of
                the Intrusion Detection System. This is the home page of the
                Intrusion Detection System.
              </Typography>
              <Button
                variant="contained"
                sx={{ padding: "0.5rem 1rem", margin: "2rem 0" }}
              >
                Get Started{">>"}
              </Button>
              <Button
                variant="outlined"
                sx={{ padding: "0.5rem 1rem", margin: "2rem 1rem" }}
              >
                Contact Us
              </Button>
            </Box>
            <Box
              component={"img"}
              src={one}
              sx={{ width: "30%", height: "auto", margin: "1rem 4rem" }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
