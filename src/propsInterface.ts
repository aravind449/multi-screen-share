import { MutableRefObject } from "react";

export interface HomeProps {
    connectToPeer: (remotePeerId: string) => void;
    startScreenShare: (name: string) => void;
    playVideo: (service: string) => void;
    currentUserVideoRef: MutableRefObject<HTMLVideoElement | null>;
    remoteUserVideoRef: MutableRefObject<HTMLVideoElement | null>;
    dataConnection: any,
}
export interface AppProps {
    setLoading: (loading: boolean) => void;
    setPeerId: (peerId: string) => void;
    setConnectionStatus: (status: boolean) => void;
    setRemotePeerIds: (peerId: string) => void;
  }

 export interface VideoDisplayProps {
    currentUserVideoRef: MutableRefObject<HTMLVideoElement | null>;
    remoteUserVideoRef: MutableRefObject<HTMLVideoElement | null>;
  }

  export interface ScreenShareInputProps {
    screenName: string;
    setScreenName: (name: string) => void;
    startScreenShare: (name: string) => void;
  }

  export interface RemotePeerConnectionProps {
    remotePeerIdValue: string;
    setRemotePeerIdValue: (remotePeerId: string) => void;
    connectToPeer: (remotePeerId: string) => void;
  }

 export interface PeerIdDisplayProps {
    loading: boolean;
    peerId: string;
  }

export  interface AdditionalActionsProps {
    startScreenShare: (name: string) => void;
    playVideo: (service: string) => void;
  }