import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { findAllShops } from "../api";
import { SearchbarOptions } from "./Home";
import "../styles/searchResult.css";

interface AllShopsInfo {
  id: number;
  name: string;
  address: string;
}

interface SearchResultProps {
  selectedOption: SearchbarOptions | null;
}

const SearchResult: React.FC<SearchResultProps> = ({ selectedOption }) => {
  const [allShops, setAllShops] = useState<AllShopsInfo[]>([]);

  let displayShops = allShops.map((shop) => {
    return (
      <div className="shopInfo">
        <Link to={"/shops/" + shop.id}>
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
  });

  //filter shops by city
  useEffect(() => {
    (async () => {
      const result = await findAllShops();
      const filteredShops: AllShopsInfo[] = result.filter((e) => {
        return e.city === selectedOption?.value;
      });
      setAllShops(filteredShops);
    })();
  }, [allShops, selectedOption]);

  return (
    <div className="shopListWrapper">
      <h2>
        Shops in <span className="cityName">{selectedOption?.label}</span>
      </h2>
      <div className="shopInfoWrapper">{displayShops}</div>
      <div className="cafeShopPicWrapper"></div>
    </div>
  );
};

export default SearchResult;
