import { RootState } from "./store/reducers/rootReducer";

export const mapAppStateToProps = (state: RootState) => ({
    loading: state.appReducer.loading,
    peerId: state.appReducer.peerId,
  });

export const mapScreenShareStateToProps = (state: RootState) => ({
    screenName: state.appReducer.screenName,
  });

export  const mapRemoteConnStateToProps = (state: RootState) => ({
    loading: state.appReducer.loading,
    peerId: state.appReducer.peerId,
    remotePeerIdValue: state.appReducer.remotePeerIdValue,
  });

export  const mapPeerIdStateToProps = (state: RootState) => ({
    loading: state.appReducer.loading,
    peerId: state.appReducer.peerId,
  });