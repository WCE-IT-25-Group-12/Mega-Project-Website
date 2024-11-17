import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Box, Button, Typography } from "@mui/material";
import SheetForm from "../components/SheetForm";
import Summary from "../components/Summary";

function Dashboard() {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
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
            marginBottom: "1.5rem",
          }}
        >
          <Typography variant="h3" component="div" sx={{ textAlign: "left" }}>
            Dashboard
          </Typography>
          <Button
            onClick={handleOpenDialog}
            style={{
              backgroundColor: "#010c24",
              color: "#fff",
              padding: "0.5rem 2rem",
              borderRadius: "0.5rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
            >
              Upload Logs
            </Typography>
          </Button>
        </Box>
        <hr style={{ border: "none", borderTop: "2px solid #808080" }} />

        <Box sx={{ marginTop: "1.5rem" }}>
          <Typography
            variant="h4"
            component="div"
            sx={{ textAlign: "left", marginBottom: "1.5rem" }}
          >
            Summary
          </Typography>
          <Summary />
        </Box>
      </Box>

      <SheetForm open={openDialog} onClose={handleCloseDialog} />
    </>
  );
}

export default Dashboard;
