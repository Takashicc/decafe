import { useEffect, useState } from "react";
import { findShopAndMenusByShopId } from "../api";
import PhotoHeader from "./PhotoHeader";
import Map from "./Map";
import Menu from "./Menu";
import { useParams } from "react-router-dom";
import isNumeric from "validator/lib/isNumeric";
import { ShopAndMenus } from "api/schema";

const ShopDetail = () => {
  let { id } = useParams();
  const [shopDetail, setShopDetail] = useState<ShopAndMenus>();

  useEffect(() => {
    (async () => {
      if (!id || !isNumeric(id)) {
        return;
      }
      const shopId: number = +id;
      const shopAndMenus: ShopAndMenus = await findShopAndMenusByShopId(shopId);
      setShopDetail(shopAndMenus);
    })();
  }, [id]);

  const render = () => {
    if (shopDetail === undefined) {
      return <></>;
    }

    return (
      <div className="Shopmain">
        <PhotoHeader shopName={shopDetail.shop.name} />
        <Menu menus={shopDetail.menus} />
        <Map
          longitude={shopDetail.shop.longitude}
          latitude={shopDetail.shop.latitude}
          address={shopDetail.shop.address}
        />
      </div>
    );
  };

  return render();
};

export default ShopDetail;
