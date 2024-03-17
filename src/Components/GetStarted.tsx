import React from "react";
import "../App.css";
import Button from "@mui/material/Button";
import { Container, Box, TextField } from "@mui/material";

const GetStarted: React.FC<any> = () => (
  <Container
    sx={{
      display: "flex",
      justifyContent: "center",

      //  alignItems: "center",
      // height: "100vh",
    }}
  >
    <Box
      sx={{
        backgroundColor: "#282828",
        //  width: 200,
        //  height: 200,
        padding: 3,
        flexDirection: "column",

        borderRadius: 7, // Adjust the border radius as needed
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#ffffff",
      }}
    >
      <TextField
        label="Enter Name"
        // variant="outlined"
        size="small"
        // value={screenName}
        // onChange={(e) => setScreenName(e.target.value)}
        //  sx={{ alignSelf: "flex-start", padding: 1 }}
        //    InputLabelProps={{ sx: { alignSelf: "flex-start" } }}
      />
      <Button
        variant="contained"
        size="small"
        fullWidth
        sx={{
          alignSelf: "flex-start",
          margin: 1,
          marginLeft: 0,
          backgroundImage:
            "linear-gradient(136deg, #f27021 0%, #e94057 50%, #8a2387 100%)",
          boxShadow: "none", // Remove the default button shadow
          "&:hover": {
            boxShadow: "none", // Remove the button shadow on hover
          },
        }}

        //  onClick={() => startScreenShare(screenName)}
      >
        Get started !
      </Button>
    </Box>
  </Container>
);

export default GetStarted;
