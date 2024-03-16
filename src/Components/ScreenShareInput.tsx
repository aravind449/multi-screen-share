import React from "react";
import { connect } from "react-redux";
import { ScreenShareInputProps } from "../propsInterface";
import { mapScreenShareDispatchToProps } from "../mapDispatchToProps";
import { mapScreenShareStateToProps } from "../mapStateToProps";

const ScreenShareInput: React.FC<ScreenShareInputProps> = ({
  screenName,
  setScreenName,
  startScreenShare,
}: ScreenShareInputProps) => (
  <div className="remote-peer">
    <label>Add Screen Share Name</label>
    <input
      type="text"
      value={screenName}
      onChange={(e) => setScreenName(e.target.value)}
    />
    <button onClick={() => startScreenShare(screenName)}>Share</button>
  </div>
);

export default connect(
  mapScreenShareStateToProps,
  mapScreenShareDispatchToProps
)(ScreenShareInput);
