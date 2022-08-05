import React, { useEffect, useState } from "react";
import { getAllShops } from "../api";
import { SearchbarOptions } from "./Home";

interface AllShopsInfo {
  name: string;
  address: string;
}

interface SearchResultProps {
  selectedOption: SearchbarOptions | null;
}

const SearchResult: React.FC<SearchResultProps> = ({ selectedOption }) => {
  const [allShops, setAllShops] = useState<AllShopsInfo[]>([]);

  let display = allShops.map((shop) => {
    return (
      <div className="shopInfo">
        Shop Name: {shop.name}
        <br></br>
        Shop Address: {shop.address}
      </div>
    );
  });

  console.log(allShops);

  //filter shops by city
  useEffect(() => {
    (async () => {
      const result = await getAllShops();
      const filteredShops: AllShopsInfo[] = result.filter((e) => {
        return e.city === selectedOption?.label;
      });
      setAllShops(filteredShops);
    })();
  }, []);

  return (
    <div className="shopListWrapper">
      {" "}
      <h2>Shops in {selectedOption?.label}</h2>
      <div className="shopInfoWrapper">{display}</div>
    </div>
  );
};

export default SearchResult;
