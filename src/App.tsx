import { useEffect, useRef } from "react";
import Peer from "peerjs";

// Import components
import PeerIdDisplay from "./Components/PeerIdDisplay";
import RemotePeerConnection from "./Components/RemotePeerConnection";
import ScreenShareInput from "./Components/ScreenShareInput";
import AdditionalActions from "./Components/AdditionalActions";
import VideoDisplay from "./Components/VideoDisplay";
import Chat from "./Components/Chat";

import { connect } from "react-redux";
import { shareVideoToUser } from "./helperFunctions";
import { mapAppDispatchToProps } from "./mapDispatchToProps";
import { mapAppStateToProps } from "./mapStateToProps";
import { AppProps } from "./propsInterface";

function App(props: AppProps) {
  const currentUserVideoRef = useRef<any | null>(null);
  const remoteUserVideoRef = useRef<any | null>(null);
  const peerInstance = useRef<Peer | null>(null);
  const globalScreens2 = useRef<any[]>([]);
  const remoteConnection = useRef<any | null>(null);

  useEffect(() => {
    const peer = new Peer();

    peer.on("open", (id) => {
      props.setPeerId(id);
      props.setLoading(false);
    });
    peer.on("connection", (conn) => {
      shareVideoToUser("youtube", globalScreens2, peerInstance, conn);
      props.setConnectionStatus(true);
      remoteConnection.current = conn;
      remoteConnection.current.on("data", (data: any) => {
        shareVideoToUser(data, globalScreens2, peerInstance, conn);
      });
    });
    peer.on("call", (call) => {
      addRemotePeerId(call.peer);
      call.answer();
      call.on("stream", (remoteStream) => {
        remoteUserVideoRef.current!.srcObject = remoteStream;
        remoteUserVideoRef.current!.autoplay = true;
        remoteUserVideoRef.current!.playsInline = true;
      });
    });

    peerInstance.current = peer;

    return () => {
      if (peerInstance.current) {
        peerInstance.current.destroy();
      }
    };
  }, []);

  const playVideo = (channel: string) => {
    remoteConnection.current!.send({ channel });
  };
  const connectToPeer = (remotePeerId: string) => {
    const remoteConn = peerInstance.current!.connect(remotePeerId);
    remoteConnection.current = remoteConn;
  };

  const startScreenShare = (screenName: string) => {
    navigator.mediaDevices
      .getDisplayMedia({
        video: true,
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
          // systemAudio: "include",
        },
      })
      .then((screenStream) => {
        let trackValue: any = screenStream;
        trackValue.uniqueId = screenName;
        globalScreens2.current.push(trackValue);
        currentUserVideoRef.current!.srcObject = trackValue;
        currentUserVideoRef.current!.play();
      })
      .catch((err) => {
        console.error("Error accessing screen sharing:", err);
      });
  };

  const addRemotePeerId = (callerPeer: string) => {
    props.setRemotePeerIds(callerPeer);
  };

  return (
    <div className="App">
      <h1>Screen Sharing App</h1>
      <PeerIdDisplay />
      <RemotePeerConnection connectToPeer={connectToPeer} />
      <ScreenShareInput startScreenShare={startScreenShare} />
      <AdditionalActions
        startScreenShare={startScreenShare}
        playVideo={playVideo}
      />
      <VideoDisplay
        currentUserVideoRef={currentUserVideoRef}
        remoteUserVideoRef={remoteUserVideoRef}
      />
      <Chat dataConnection={remoteConnection} />
    </div>
  );
}

export default connect(mapAppStateToProps, mapAppDispatchToProps)(App);
