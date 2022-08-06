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
          <div className="shopInfoText">
            <span className="shopName">{shop.name}</span>
            <br></br>
            Address: <span className="shopAddress">{shop.address}</span>
            <div className="imageWrapper">
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt="cute coffee"
              />
              <img
                src="https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt="cute coffee"
              />
              <img
                src="https://images.unsplash.com/photo-1511081692775-05d0f180a065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
                alt="cute coffee"
              />
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZmZlZSUyMHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="cute coffee"
              />
              <img
                src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
  }, allShops);

  return (
    <div className="shopListWrapper">
      <h2>
        Shops in <span className="cityName">{selectedOption?.value}</span>
      </h2>
      <div className="shopInfoWrapper">{displayShops}</div>
      <div className="cafeShopPicWrapper"></div>
    </div>
  );
};

export default SearchResult;
