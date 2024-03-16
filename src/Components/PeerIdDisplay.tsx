import React from "react";
import { connect } from "react-redux";
import { RootState } from "../store/reducers/rootReducer";
import { PeerIdDisplayProps } from "../propsInterface";
import { mapPeerIdStateToProps } from "../mapStateToProps";

const PeerIdDisplay: React.FC<PeerIdDisplayProps> = ({ loading, peerId }) => (
  <div className="peer-id">
    <label>Your Peer ID:</label>
    <div>{loading ? "Loading..." : peerId}</div>
  </div>
);

export default connect(mapPeerIdStateToProps)(PeerIdDisplay);
