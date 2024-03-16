import { AppProps } from "./propsInterface";

export const toggleFullScreen = (videoRef: any) => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) {
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  export function onConnection(globalScreens: any, peerInstance: any, conn: any, props: AppProps, remoteConnection: any) {
    shareVideoToUser("youtube", globalScreens, peerInstance, conn);
    props.setConnectionStatus(true);
    remoteConnection.current.on("data", (data: any) => {
      shareVideoToUser(data, globalScreens, peerInstance, conn);
    });
  }

export function onCall(
    addRemotePeerId: (callerPeer: string) => void,
    call: any,
    remoteUserVideoRef: any
  ) {
    addRemotePeerId(call.peer);
    call.answer();
    call.on("stream", (remoteStream: any) => {
      remoteUserVideoRef.current!.srcObject = remoteStream;
      remoteUserVideoRef.current!.autoplay = true;
      remoteUserVideoRef.current!.playsInline = true;
    });
  }

export function shareVideoToUser(
  data: any,
  globalScreens: any,
  peerInstance: any,
  conn: any
) {
  globalScreens.current.forEach((tracksVA: any) => {
    if (tracksVA.uniqueId === data.channel) {
      peerInstance.current!.call(conn.peer, tracksVA);
    }
  });
}

export function processInputStream(screenStream: MediaStream, screenName: string, currentUserVideoRef: any) {
    let trackValue: any = screenStream;
    trackValue.uniqueId = screenName;
    currentUserVideoRef.current!.srcObject = trackValue;
    currentUserVideoRef.current!.play();
    return trackValue;
  }