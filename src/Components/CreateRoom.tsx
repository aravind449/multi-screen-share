import React from "react";
import PeerIdDisplay from "./PeerIdDisplay";
import ScreenShareInput from "./ScreenShareInput";

const CreateRoom: React.FC<any> = ({ startScreenShare }) => (
  <div className="remote-peer">
    <PeerIdDisplay />
    <ScreenShareInput startScreenShare={startScreenShare} />
  </div>
);

export default CreateRoom;
