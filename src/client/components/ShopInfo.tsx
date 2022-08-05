import React, { useState } from "react";
import { Fragment } from "react";
import modelType from "../model.type";
import "../styles/ShopInfo.css";

interface ShopInfoProps {
  shopDetail: modelType.ShopAndMenu;
}

const Shopinfo: React.FC<ShopInfoProps> = ({ shopDetail }) => {
  //example store
  const store = {
    name: shopDetail?.shop?.name,
    address: shopDetail?.shop?.address,
  };

  return (
    <>
      <div className="storename">{store.name}</div>
      <div className="address">{store.address}</div>
    </>
  );
};

export default Shopinfo;
