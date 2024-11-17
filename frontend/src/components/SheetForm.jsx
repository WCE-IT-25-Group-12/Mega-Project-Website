import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function SheetForm({ open, onClose }) {
  const [file, setFile] = useState(null);
  const [logType, setLogType] = useState("");
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleLogTypeChange = (event) => {
    setLogType(event.target.value);
  };

  const handleSubmit = () => {
    if (!file || !logType) {
      setError("Please provide all required fields.");
      return;
    }

    setSubmitted(true);
    onClose();
  };

  return (
    <BootstrapDialog
      onClose={() => {
        if (submitted) onClose();
      }}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <Box sx={{ padding: "2rem", backgroundColor: "" }}>
        <DialogTitle
          sx={{ m: 0, p: 2 }}
          id="customized-dialog-title"
          sx={{ fontSize: "2rem" }}
        >
          Upload Logs
          <IconButton
            aria-label="close"
            onClick={() => {
              onClose();
            }}
            sx={(theme) => ({
              position: "absolute",
              right: 8,
              top: 8,
              color: theme.palette.grey[500],
            })}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Upload a log file in CSV or XLS format to analyze and detect
            potential cyberattacks.
          </Typography>
          <TextField
            type="file"
            inputProps={{ accept: ".csv, .xls, .xlsx" }}
            onChange={handleFileChange}
            fullWidth
            sx={{ margin: "1rem 0" }}
          />
          <TextField
            select
            label="Select type of logs"
            value={logType}
            onChange={handleLogTypeChange}
            fullWidth
            sx={{ marginBottom: "1rem" }}
          >
            <MenuItem value="system_logs">System Logs</MenuItem>
            <MenuItem value="firewall_logs">Firewall Logs</MenuItem>
            <MenuItem value="cloud_logs">Cloud Logs</MenuItem>
          </TextField>
          {error && (
            <Typography color="error" sx={{ marginBottom: "1rem" }}>
              {error}
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Submit
          </Button>
        </DialogActions>
      </Box>
    </BootstrapDialog>
  );
}
