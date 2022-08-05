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
    "images/1 (3).jpg",
    "images/2.jpg",
    "images/1 (5).jpg",
    "images/1.jpg",
    "images/1 (4).jpg",
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
