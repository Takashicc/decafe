import React, { useState } from "react";
import Photoheader from "./PhotoHeader";
import Shopinfo from "./ShopInfo";
import Map from "./Map";
import Menu from "./Menu";
import ShopDetail from "./ShopDetail";

//prop to be used by components
const shopObj = {};

const ShopMain: React.FC = () => {
  return (
    <div className="Shopmain">
      <Photoheader />

      <Shopinfo />

      <ShopDetail />

      <Map />

      <Menu />
    </div>
  );
};

export default ShopMain;
