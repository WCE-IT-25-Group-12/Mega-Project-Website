import React from "react";
import Stack from "@mui/material/Stack";
import { PieChart } from "@mui/x-charts/PieChart";
import palettes from "../utils/colorPalettes";
import { Box, Typography } from "@mui/material";
const systemLogs = [
  { id: "Safe", value: 70 },
  { id: "Unsafe", value: 30 },
];

const firewallLogs = [
  { id: "Safe", value: 80 },
  { id: "Unsafe", value: 20 },
];

const cloudLogs = [
  { id: "Safe", value: 60 },
  { id: "Unsafe", value: 40 },
];

// Legend Component
function Legend({ colors }) {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", marginTop: "0.5rem" }}
    >
      <Box sx={{ display: "flex", alignItems: "center", marginRight: "1rem" }}>
        <Box
          sx={{
            width: "15px",
            height: "15px",
            backgroundColor: colors[0], // Safe color
            marginRight: "0.5rem",
          }}
        />
        <Typography variant="body2">Safe</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            width: "15px",
            height: "15px",
            backgroundColor: colors[1], // Unsafe color
            marginRight: "0.5rem",
          }}
        />
        <Typography variant="body2">Unsafe</Typography>
      </Box>
    </Box>
  );
}
const Summary = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "1.5rem",
        }}
      >
        <Stack direction="row" width="100%" textAlign="center" spacing={2}>
          <Box flexGrow={1}>
            <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
              System Logs
            </Typography>
            <PieChart
              series={[
                {
                  data: systemLogs,
                },
              ]}
              colors={palettes.warm}
              {...pieParams}
              sx={{ marginBottom: "0.8rem" }}
            />
            <Legend colors={palettes.warm} />
          </Box>
          <Box flexGrow={1}>
            <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
              Firewall Logs
            </Typography>
            <PieChart
              series={[
                {
                  data: firewallLogs,
                },
              ]}
              colors={palettes.cool}
              {...pieParams}
              sx={{ marginBottom: "0.8rem" }}
            />
            <Legend colors={palettes.cool} />
          </Box>
          <Box flexGrow={1}>
            <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
              Cloud Logs
            </Typography>
            <PieChart
              series={[
                {
                  data: cloudLogs,
                },
              ]}
              colors={palettes.alert}
              {...pieParams}
              sx={{ marginBottom: "0.8rem" }}
            />
            <Legend colors={palettes.alert} />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

const pieParams = {
  height: 350,
  margin: { right: 5 },
  slotProps: {
    legend: { hidden: true },
    tooltip: {
      formatter: (params) => {
        return `${params.id}: ${params.value} - ${
          params.id === "Safe" ? "Status: Safe" : "Status: Unsafe"
        }`;
      },
    },
  },
};

export default Summary;
