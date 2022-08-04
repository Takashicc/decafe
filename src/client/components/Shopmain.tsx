import React, { useState } from "react";
import Photoheader from "./Photoheader";
import Shopinfo from "./Shopinfo";
import Map from "./Map";
import Menu from "./Menu";

//prop to be used by components
const shopObj = {};

const Shopmain: React.FC = () => {
  return (
    <div className="Shopmain">
      <Photoheader />

      <Shopinfo />

      <Map />

      <Menu />
    </div>
  );
};

export default Shopmain;
