import { useEffect, useState } from "react";
import { findShopAndMenusByShopId } from "@/api";
import { Map } from "@/components/atoms/Map";
import Menu from "@/components/molecules/Menu";
import PhotoHeader from "@/components/organisms/PhotoHeader";
import isNumeric from "validator/lib/isNumeric";
import { ShopAndMenus } from "@/api/schema";
import { useRouter } from "next/router";

const Detail = () => {
  const router = useRouter();
  const id = router.query.id as string;
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
      <div>
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

export default Detail;
