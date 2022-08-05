import React, { useState } from "react";
import "../styles/Map.css";
import modelType from "../model.type";

interface ShopInfoProps {
  shopDetail: modelType.ShopAndMenu;
}

const Map: React.FC<ShopInfoProps> = ({ shopDetail }) => {
  const shoploc = {
    name: shopDetail?.shop?.name,
    lat: shopDetail?.shop?.latitude,
    lng: shopDetail?.shop?.longtitude,
  };
  return (
    <div className="map">
      <iframe
        src={`https://maps.google.com/maps?q=${shoploc.lat}, ${shoploc.lng}&z=15&output=embed`}
        width="500"
        height="370"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
