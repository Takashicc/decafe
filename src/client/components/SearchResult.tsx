import React from "react";

const SearchResult = ({ selected }: any) => {
  return (
    <div className="shopListWrapper">
      {" "}
      <h2>Shops in {selected.label}</h2>
      <div></div>
    </div>
  );
};

export default SearchResult;
