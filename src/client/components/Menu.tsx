import React, { useState } from "react";
import modelType from "../model.type";

interface ShopInfoProps {
  shopDetail: modelType.ShopAndMenu;
}

const Menu: React.FC<ShopInfoProps> = ({ shopDetail }) => {
  const menu = shopDetail?.menus;
  return (
    <div>
      {menu?.map((singleMenu) => {
        return (
          <>
            <div>
              {" "}
              {singleMenu.name} {singleMenu.price}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Menu;
