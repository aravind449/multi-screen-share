import React from "react";
import { FaYoutube, FaAmazon } from "react-icons/fa";
import "../App.css";
import { AdditionalActionsProps } from "../propsInterface";
import Button from "@mui/material/Button";

const AdditionalActions: React.FC<AdditionalActionsProps> = ({
  startScreenShare,
  playVideo,
}) => (
  <div className="actions">
    <button className="playIcons" onClick={() => playVideo("youtube")}>
      <FaYoutube />
    </button>
    <button className="playIcons" onClick={() => playVideo("netflix")}>
      <FaAmazon />
    </button>
  </div>
);

export default AdditionalActions;
