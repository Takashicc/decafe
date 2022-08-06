import { useEffect, useState } from "react";
import modelType from "../model.type";
import { findShopAndMenuById } from "../api";
import Photoheader from "./PhotoHeader";
import Map from "./Map";
import Menu from "./Menu";
import { useParams } from "react-router-dom";
import isNumeric from "validator/lib/isNumeric";

const ShopMain: React.FC = () => {
  let { id } = useParams();
  const [shopDetail, setShopDetail] = useState<modelType.ShopAndMenu>();
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      if (!id || !isNumeric(id)) {
        setNotFound(true);
        setShopDetail(undefined);
        return;
      }
      const numId: number = +id;
      const shop: modelType.ShopAndMenu = await findShopAndMenuById(numId);
      setShopDetail(shop);
      if (shop === undefined) {
        setNotFound(true);
      } else {
        setNotFound(false);
      }
    })();
  }, [id]);

  return (
    <div className="Shopmain">
      <Photoheader shopDetail={shopDetail} />

      <Menu shopDetail={shopDetail} />

      <Map shopDetail={shopDetail} />
    </div>
  );
};

export default ShopMain;
