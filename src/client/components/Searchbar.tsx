import React from "react";
import { useState } from "react";
import Select from "react-select";
import "../styles/searchbar.css";
import SearchResult from "./SearchResult";

const Searchbar = () => {
  const options = [
    { label: "Shinjuku", value: "shinjuku" },
    { label: "Shibuya", value: "shibuya" },
    { label: "Harajuku", value: "harajuku" },
    { label: "Kyoto", value: "kyoto" },
    { label: "Osaka", value: "osaka" },
  ];

  const [selected, setSelected] = useState(null);

  const handleChange = (event: any) => {
    console.log(event);
    setSelected(event);
  };

  return (
    <div className="searchbarWapper">
      <Select
        value={selected}
        onChange={handleChange}
        options={options}
        placeholder="ex. Shinjuku"
        backspaceRemovesValue
        isClearable
        escapeClearsValue
        openMenuOnClick={false}
      />
      {selected !== null ? <SearchResult /> : null}
    </div>
  );
};

export default Searchbar;
