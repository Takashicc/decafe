import React, { useState } from "react";
import "../styles/Image.css";
import { BrowserRouter as Router } from "react-router-dom";

//open image in new tab
const openInNewTab = (url: string): void => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

const Photoheader: React.FC = () => {
  //image string to map
  const images = [
    "images/ID1SID1.jpg",
    "images/ID1SID2.jpg",
    "images/ID1SID3.jpg",
    "images/ID1SID4.jpg",
    "images/ID1SID5.jpg",
  ];

  return (
    <div className="imagewrapper">
      {images.map((image: string) => {
        return (
          <img
            className="image"
            src={`${image}`}
            onClick={() => {
              openInNewTab(`${image}`);
            }}
          />
        );
      })}
    </div>
  );
};

export default Photoheader;
