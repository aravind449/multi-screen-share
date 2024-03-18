import React from "react";
import { connect } from "react-redux";
import { RemotePeerConnectionProps } from "../propsInterface";
import { mapRemoteConnDispatchToProps } from "../mapDispatchToProps";
import { mapRemoteConnStateToProps } from "../mapStateToProps";
import { Button, TextField, Box, Container } from "@mui/material";

const RemotePeerConnection: React.FC<RemotePeerConnectionProps> = ({
  remotePeerIdValue,
  setRemotePeerIdValue,
  connectToPeer,
}) => (
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
        label="Enter Room Id"
        // variant="outlined"
        size="small"
        value={remotePeerIdValue}
        onChange={(e) => setRemotePeerIdValue(e.target.value)}
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
        onClick={() => connectToPeer(remotePeerIdValue)}
      >
        connect
      </Button>
    </Box>
  </Container>
);

export default connect(
  mapRemoteConnStateToProps,
  mapRemoteConnDispatchToProps
)(RemotePeerConnection);
