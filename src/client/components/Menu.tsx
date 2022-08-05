import React, { useState } from "react";

const Menu: React.FC = () => {
  const menu = [{ name: "mega-decaf Takashi special", price: "50000" }];
  return (
    <div>
      {menu[0].name}
      {menu[0].price}
    </div>
  );
};

export default Menu;
