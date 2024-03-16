import { useEffect, useRef } from "react";
import Peer from "peerjs";
import { connect } from "react-redux";
import { onCall, onConnection, processInputStream } from "./helperFunctions";
import { mapAppDispatchToProps } from "./mapDispatchToProps";
import { mapAppStateToProps } from "./mapStateToProps";
import { AppProps } from "./propsInterface";
import { constraints } from "./constants";
import Home from "./Components/Home";

function App(props: AppProps) {
  // these are props that can't set in redux
  const currentUserVideoRef = useRef<any | null>(null);
  const remoteUserVideoRef = useRef<any | null>(null);
  const peerInstance = useRef<Peer | null>(null);
  const globalScreens = useRef<any[]>([]);
  const remoteConnection = useRef<any | null>(null);

  useEffect(() => {
    const peer = new Peer();

    peer.on("open", (id) => {
      props.setPeerId(id);
      props.setLoading(false);
    });
    peer.on("connection", (conn) => {
      onConnection(globalScreens, peerInstance, conn, props, remoteConnection);
    });
    peer.on("call", (call) => {
      onCall(addRemotePeerId, call, remoteUserVideoRef);
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
      .getDisplayMedia(constraints)
      .then((screenStream) => {
        globalScreens.current.push(
          processInputStream(screenStream, screenName, currentUserVideoRef)
        );
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
      <Home
        connectToPeer={connectToPeer}
        startScreenShare={startScreenShare}
        playVideo={playVideo}
        currentUserVideoRef={currentUserVideoRef}
        remoteUserVideoRef={remoteUserVideoRef}
        dataConnection={remoteConnection}
      ></Home>
    </div>
  );
}

export default connect(mapAppStateToProps, mapAppDispatchToProps)(App);
