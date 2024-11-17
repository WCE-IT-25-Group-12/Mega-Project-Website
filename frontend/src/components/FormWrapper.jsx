import Box from "@mui/material/Box";
import { CssBaseline } from "@mui/material";
import Paper from "@mui/material/Paper";
// import logo from "../../assets/logomark.png";
import PropTypes from "prop-types";
// import bg from "../../assets/bg.png";

const FormWrapper = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{
            alignSelf: "flex-start",
            marginLeft: {
              xs: "0.5rem",
              md: "1.2rem",
            },
            marginTop: {
              xs: "0.3rem",
              md: "0.5rem",
            },
            width: {
              xs: "8rem ",
              sm: "10rem",
              md: "14rem",
            },
          }}
        /> */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <Paper
            elevation={10}
            sx={{
              textAlign: "center",
              boxShadow: "0px 8px 20px -10px rgba(0, 0, 0, 0.50)",
              borderRadius: "1.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {children}
          </Paper>
        </Box>
      </Box>
    </>
  );
};

FormWrapper.propTypes = {
  children: PropTypes.node,
};

export default FormWrapper;
