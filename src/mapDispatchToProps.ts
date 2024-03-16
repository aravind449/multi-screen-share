import { setLoading, setPeerId, setConnectionStatus, setRemotePeerIds, setScreenName, setRemotePeerIdValue } from "./store/actions/appActions";

export const mapAppDispatchToProps = {
    setLoading,
    setPeerId,
    setConnectionStatus,
    setRemotePeerIds,
  };

export const mapScreenShareDispatchToProps = {
    setScreenName,
  };

export const mapRemoteConnDispatchToProps = {
    setRemotePeerIdValue,
  };