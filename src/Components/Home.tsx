import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeProps } from "../propsInterface";
import BeforeHome from "./BeforeHome";
import Room from "./Room";
import AdditionalActions from "./AdditionalActions";
import Chat from "./Chat";
import PeerIdDisplay from "./PeerIdDisplay";
import RemotePeerConnection from "./RemotePeerConnection";
import ScreenShareInput from "./ScreenShareInput";
import VideoDisplay from "./VideoDisplay";
import JoinRoom from "./JoinRoom";
import CreateRoom from "./CreateRoom";

const Home: React.FC<any> = ({
  connectToPeer,
  startScreenShare,
  playVideo,
  currentUserVideoRef,
  remoteUserVideoRef,
  dataConnection,
}: HomeProps) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BeforeHome />} />
        <Route path="/room" element={<Room />} />
        <Route path="/peerId" element={<PeerIdDisplay />} />
        <Route
          path="/joinroom"
          element={
            <JoinRoom
              connectToPeer={connectToPeer}
              startScreenShare={startScreenShare}
              playVideo={playVideo}
              currentUserVideoRef={currentUserVideoRef}
              remoteUserVideoRef={remoteUserVideoRef}
            />
          }
        />
        <Route
          path="/createroom"
          element={<CreateRoom startScreenShare={startScreenShare} />}
        />
        <Route
          path="/remoteconnection"
          element={<RemotePeerConnection connectToPeer={connectToPeer} />}
        />
        <Route
          path="/screenshare"
          element={<ScreenShareInput startScreenShare={startScreenShare} />}
        />
        <Route
          path="/additional"
          element={
            <AdditionalActions
              startScreenShare={startScreenShare}
              playVideo={playVideo}
            />
          }
        />
        <Route
          path="/room"
          element={
            <VideoDisplay
              currentUserVideoRef={currentUserVideoRef}
              remoteUserVideoRef={remoteUserVideoRef}
            />
          }
        />
        <Route
          path="/room"
          element={<Chat dataConnection={dataConnection} />}
        />
      </Routes>
    </Router>
  );
};

export default Home;
