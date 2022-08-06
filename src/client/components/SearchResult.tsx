import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
          Shop Name: <span className="shopName">{shop.name}</span>
          <br></br>
          Shop Address: <span className="shopAddre">{shop.address}</span>
        </Link>
      </div>
    );
  });

  //filter shops by city
  useEffect(() => {
    (async () => {
      const result = await findAllShops();
      const filteredShops: AllShopsInfo[] = result.filter((e) => {
        return e.city === selectedOption?.label;
      });
      setAllShops(filteredShops);
    })();
  }, allShops);

  return (
    <div className="shopListWrapper">
      <h2>
        Shops in <span className="cityName">{selectedOption?.label}</span>
      </h2>
      <div className="shopInfoWrapper">{displayShops}</div>
    </div>
  );
};

export default SearchResult;
