// import "@/styles/searchResult.css";
import { useEffect, useState } from "react";
import { findAllShops } from "@/api";
import Link from "next/link";

interface AllShopsInfo {
  id: number;
  name: string;
  address: string;
}

interface SearchResultProps {
  selectedCity: string;
}

const SearchResult = ({ selectedCity }: SearchResultProps) => {
  const [shops, setShops] = useState<AllShopsInfo[]>([]);

  useEffect(() => {
    (async () => {
      // TODO Select shop by city name
      const result = await findAllShops();
      const filteredShops: AllShopsInfo[] = result.filter((e) => {
        return e.city.toLowerCase() === selectedCity.toLowerCase();
      });
      setShops(filteredShops);
    })();
  }, [selectedCity]);

  return (
    <div className="shopListWrapper">
      <h2>
        Shops in <span className="cityName">{selectedCity}</span>
      </h2>
      <div className="shopInfoWrapper">
        {shops.map((shop) => {
          return (
            <div className="shopInfo">
              <Link href={`/shops/${shop.id}`}>
                <div className="shopInfoText">
                  <span className="shopName">{shop.name}</span>
                  <br></br>
                  Address: <span className="shopAddress">{shop.address}</span>
                  <div className="imageWrapper">
                    <img
                      src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                      alt="cute coffee"
                    />
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="cafeShopPicWrapper"></div>
    </div>
  );
};

export default SearchResult;
