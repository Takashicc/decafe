import { useEffect, useState } from "react";
import modelType from "../model.type";
import { findShopById } from "../api";
import { useParams } from "react-router-dom";
import isNumeric from "validator/lib/isNumeric";

const ShopDetail: React.FC = () => {
  let { id } = useParams();
  const [shopDetail, setShopDetail] = useState<modelType.ShopGet>();
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      if (!id || !isNumeric(id)) {
        setNotFound(true);
        setShopDetail(undefined);
        return;
      }
      const numId: number = +id;
      const shop: modelType.ShopGet = await findShopById(numId);
      setShopDetail(shop);
      if (shop === undefined) {
        setNotFound(true);
      } else {
        setNotFound(false);
      }
    })();
  }, [id]);

  const renderShopDetail = () => {
    if (!shopDetail) {
      return;
    }

    return (
      <>
        <div>Shop Name: {shopDetail.name}</div>
        <div>Shop Address: {shopDetail.address}</div>
      </>
    );
  };

  const renderNotFound = () => {
    return <>Not Found!</>;
  };

  return <>{notFound ? renderNotFound() : renderShopDetail()}</>;
};

export default ShopDetail;
