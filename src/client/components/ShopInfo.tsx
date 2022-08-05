import React, { useState } from "react";
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const Shopinfo: React.FC = () => {
  //example store
  const store = {
    name: "Decafeination",
    Address: "東京都鴨町６丁目３－１－５５",
  };

  return (
    <div>
      {store.name}
      {store.Address}
    </div>
  );
};

export default Shopinfo;
