import { HomeProps } from "../propsInterface";
import AdditionalActions from "./AdditionalActions";
import Chat from "./Chat";
import PeerIdDisplay from "./PeerIdDisplay";
import RemotePeerConnection from "./RemotePeerConnection";
import ScreenShareInput from "./ScreenShareInput";
import VideoDisplay from "./VideoDisplay";

const Home: React.FC<HomeProps> = ({
  connectToPeer,
  startScreenShare,
  playVideo,
  currentUserVideoRef,
  remoteUserVideoRef,
  dataConnection,
}: HomeProps) => {
  return (
    <div>
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
      <Chat dataConnection={dataConnection} />
    </div>
  );
};

export default Home;
