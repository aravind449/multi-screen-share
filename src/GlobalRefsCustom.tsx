import { useRef } from "react";
import Peer from "peerjs";

function GlobalRefsCustom() {
  // these are props that can't set in redux
  const currentUserVideoRef = useRef<any | null>(null);
  const remoteUserVideoRef = useRef<any | null>(null);
  const peerInstance = useRef<Peer | null>(null);
  const globalScreens = useRef<any[]>([]);
  const remoteConnection = useRef<any | null>(null);

  const setCurrentUserVideoRef = (newValue: any) => {
    currentUserVideoRef.current = newValue;
  };
  const setRemoteUserVideoRef = (newValue: any) => {
    remoteUserVideoRef.current = newValue;
  };
  const setPeerInstance = (newValue: any) => {
    peerInstance.current = newValue;
  };
  const setGlobalScreens = (newValue: any) => {
    globalScreens.current.push(newValue);
  };
  const setRemoteConnection = (newValue: any) => {
    remoteConnection.current = newValue;
  };
  return {
    currentUserVideoRef,
    remoteUserVideoRef,
    peerInstance,
    globalScreens,
    remoteConnection,
    setCurrentUserVideoRef,
    setRemoteUserVideoRef,
    setPeerInstance,
    setGlobalScreens,
    setRemoteConnection,
  };
}

export default GlobalRefsCustom;
