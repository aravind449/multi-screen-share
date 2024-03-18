import { useEffect, useRef } from "react";
import Peer from "peerjs";
import { connect } from "react-redux";
import { onCall, onConnection, processInputStream } from "./helperFunctions";
import { mapAppDispatchToProps } from "./mapDispatchToProps";
import { mapAppStateToProps } from "./mapStateToProps";
import { AppProps } from "./propsInterface";
import { constraints } from "./constants";
import Home from "./Components/Home";
import GlobalRefsCustom from "./GlobalRefsCustom";

function App(props: AppProps) {
  // these are props that can't set in redux
  const currentUserVideoRef = useRef<any | null>(null);
  const remoteUserVideoRef = useRef<any | null>(null);

  const params = GlobalRefsCustom();

  useEffect(() => {
    const peer = new Peer();

    peer.on("open", (id) => {
      props.setPeerId(id);
      props.setLoading(false);
    });
    peer.on("connection", (conn) => {
      params.setRemoteConnection(conn);
      onConnection(
        params.globalScreens,
        params.peerInstance,
        conn,
        props,
        params.remoteConnection
      );
    });
    peer.on("call", (call) => {
      onCall(addRemotePeerId, call, remoteUserVideoRef);
    });

    params.setPeerInstance(peer);

    return () => {
      if (params.peerInstance.current) {
        params.peerInstance.current.destroy();
      }
    };
  }, []);

  const playVideo = (channel: string) => {
    console.log("send...");
    params.remoteConnection.current!.send({ channel });
  };
  const connectToPeer = (remotePeerId: string) => {
    const remoteConn = params.peerInstance.current!.connect(remotePeerId);
    params.setRemoteConnection(remoteConn);
  };

  const startScreenShare = (screenName: string) => {
    navigator.mediaDevices
      .getDisplayMedia(constraints)
      .then((screenStream) => {
        params.setGlobalScreens(
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
        dataConnection={params.remoteConnection}
      ></Home>
    </div>
  );
}

export default connect(mapAppStateToProps, mapAppDispatchToProps)(App);
