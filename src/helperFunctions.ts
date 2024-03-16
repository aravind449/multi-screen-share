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