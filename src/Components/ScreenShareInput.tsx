import React from "react";
import { connect } from "react-redux";
import { ScreenShareInputProps } from "../propsInterface";
import { mapScreenShareDispatchToProps } from "../mapDispatchToProps";
import { mapScreenShareStateToProps } from "../mapStateToProps";
import { Box, TextField, Button } from "@mui/material";
import { setRemotePeerIdValue } from "../store/actions/appActions";

const ScreenShareInput: React.FC<ScreenShareInputProps> = ({
  screenName,
  setScreenName,
  startScreenShare,
}: ScreenShareInputProps) => (
  <div className="remote-peer">
    <Box display="flex" alignItems="center">
      <TextField
        label="Enter Screen Share Name"
        variant="outlined"
        size="small"
        value={screenName}
        onChange={(e) => setScreenName(e.target.value)}
        sx={{ alignSelf: "flex-start", padding: 1 }}
        InputLabelProps={{ sx: { alignSelf: "flex-start" } }}
      />
      <Button
        variant="contained"
        size="small"
        onClick={() => startScreenShare(screenName)}
      >
        Share
      </Button>
    </Box>
  </div>
);

export default connect(
  mapScreenShareStateToProps,
  mapScreenShareDispatchToProps
)(ScreenShareInput);
