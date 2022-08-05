import React, { useState } from "react";
import { Fragment } from "react";
import modelType from "../model.type";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
interface ShopInfoProps {
  shopDetail: modelType.ShopGet;
}

const Shopinfo: React.FC<ShopInfoProps> = ({ shopDetail }) => {
  //example store
  const store = {
    name: shopDetail?.name,
    address: shopDetail?.address,
  };

  return (
    <div>
      {store.name}
      {store.address}
    </div>
  );
};

export default Shopinfo;
