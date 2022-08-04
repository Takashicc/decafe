import React, { useState } from "react";
import "../styles/Login.css";
import GoogleMapReact from "google-map-react";
import "../styles/Map.css";

const Map: React.FC = () => {
  const location = {
    address: "東京都鴨町６丁目３－１－５５",
    lat: 35.658304852964726,
    lng: 139.72788045821426,
  };
  return (
    <div className="map">
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12966.968358244847!2d${location.lng}!3d${location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f379344c2681%3A0x26845247535bd152!2sDecafination%20Tokyo!5e0!3m2!1sen!2sjp!4v1659583235913!5m2!1sen!2sjp`}
        width="600"
        height="450"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
