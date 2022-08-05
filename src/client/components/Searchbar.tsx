import React from "react";
import Select from "react-select";
import "../styles/searchbar.css";

const Searchbar = ({ selected, setSelected }: any) => {
  const options = [
    { label: "Shinjuku", value: "shinjuku" },
    { label: "Shibuya", value: "shibuya" },
    { label: "Harajuku", value: "harajuku" },
    { label: "Kyoto", value: "kyoto" },
    { label: "Osaka", value: "osaka" },
  ];

  const handleChange = (event: any) => {
    if (event !== null) setSelected(event);
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
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
      />
    </div>
  );
};

export default Searchbar;
