import React from "react";
import AdditionalActions from "./AdditionalActions";
import RemotePeerConnection from "./RemotePeerConnection";
import VideoDisplay from "./VideoDisplay";
import { Container } from "@mui/material";

const JoinRoom: React.FC<any> = ({
  connectToPeer,
  startScreenShare,
  playVideo,
  currentUserVideoRef,
  remoteUserVideoRef,
}) => (
  <Container
    sx={{
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",

      alignItems: "center",
      // height: "100vh",
    }}
  >
    {" "}
    <RemotePeerConnection connectToPeer={connectToPeer} />
    <AdditionalActions
      startScreenShare={startScreenShare}
      playVideo={playVideo}
    />
    <VideoDisplay
      currentUserVideoRef={currentUserVideoRef}
      remoteUserVideoRef={remoteUserVideoRef}
    />
  </Container>
);

export default JoinRoom;
