import React from "react";
import { connect } from "react-redux";
import { RemotePeerConnectionProps } from "../propsInterface";
import { mapRemoteConnDispatchToProps } from "../mapDispatchToProps";
import { mapRemoteConnStateToProps } from "../mapStateToProps";

const RemotePeerConnection: React.FC<RemotePeerConnectionProps> = ({
  remotePeerIdValue,
  setRemotePeerIdValue,
  connectToPeer,
}) => (
  <div className="remote-peer">
    <label>Add Remote Peer ID:</label>
    <input
      type="text"
      value={remotePeerIdValue}
      onChange={(e) => setRemotePeerIdValue(e.target.value)}
    />
    <button onClick={() => connectToPeer(remotePeerIdValue)}>Call</button>
  </div>
);

export default connect(
  mapRemoteConnStateToProps,
  mapRemoteConnDispatchToProps
)(RemotePeerConnection);
