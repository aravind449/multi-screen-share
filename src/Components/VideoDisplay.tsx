import { toggleFullScreen } from "../helperFunctions";
import { VideoDisplayProps } from "../propsInterface";

function VideoDisplay({
  currentUserVideoRef,
  remoteUserVideoRef,
}: VideoDisplayProps) {
  const toggleFullScreenRemote = () => {
    toggleFullScreen(remoteUserVideoRef);
  };

  const toggleFullScreenCurrent = () => {
    toggleFullScreen(currentUserVideoRef);
  };

  return (
    <div className="video-container">
      <div className="local-video">
        <label>Your Screen:</label>
        <video ref={currentUserVideoRef} autoPlay muted playsInline />
        <button onClick={toggleFullScreenCurrent}>Toggle Full Screen</button>
      </div>
      <div className="remote-videos">
        <label>Remote Screens:</label>
        <video ref={remoteUserVideoRef} />
        <button onClick={toggleFullScreenRemote}>Toggle Full Screen</button>
      </div>
    </div>
  );
}

export default VideoDisplay;
