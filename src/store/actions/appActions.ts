export const SET_LOADING = 'SET_LOADING';
export const SET_PEER_ID = 'SET_PEER_ID';
export const SET_CONNECTION_STATUS = 'SET_CONNECTION_STATUS';
export const SET_SCREEN_NAME = 'SET_SCREEN_NAME';
export const SET_REMOTE_PEER_IDS = 'SET_REMOTE_PEER_IDS';
export const SET_REMOTE_PEER_ID_VALUE = 'SET_REMOTE_PEER_ID_VALUE';


export interface SetLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}
export interface SetPeerIdAction {
  type: typeof SET_PEER_ID;
  payload: string;
}
export interface SetConnectionStatus {
    type: typeof SET_CONNECTION_STATUS;
    payload: boolean;
  }
export interface SetScreenName {
    type: typeof SET_SCREEN_NAME;
    payload: string;
  }
export interface SetRemotePeerIds {
    type: typeof SET_REMOTE_PEER_IDS;
    payload: string;
  }
  
export interface SetRemotePeerIdValue {
    type: typeof SET_REMOTE_PEER_ID_VALUE;
    payload: string;
  }

  export type AppActionTypes = SetLoadingAction | SetPeerIdAction
                               | SetConnectionStatus | SetScreenName
                               |SetRemotePeerIds | SetRemotePeerIdValue;


export const setLoading = (loading: boolean): SetLoadingAction => ({
  type: SET_LOADING,
  payload: loading,
});

export const setPeerId = (peerId: string): SetPeerIdAction => (
{
  type: SET_PEER_ID,
  payload: peerId,
});

export const setConnectionStatus = (status: boolean): SetConnectionStatus => ({
    type: SET_CONNECTION_STATUS,
    payload: status,
  });
  
  export const setScreenName = (peerId: string): SetScreenName => (
  {
    type: SET_SCREEN_NAME,
    payload: peerId,
  });

  export const setRemotePeerIds = (peerID: string): SetRemotePeerIds => ({
    type: SET_REMOTE_PEER_IDS,
    payload: peerID,
  });
  
  export const setRemotePeerIdValue = (peerId: string): SetRemotePeerIdValue => (
  {
    type: SET_REMOTE_PEER_ID_VALUE,
    payload: peerId,
  });
