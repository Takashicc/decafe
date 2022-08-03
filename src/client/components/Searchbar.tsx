import React from "react";
import Select from "react-select";
import "../styles/searchbar.css";

const Searchbar = () => {
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const options = [
    { label: "Shinjuku", value: 1 },
    { label: "Shibuya", value: 2 },
    { label: "Harajuku", value: 3 },
    { label: "Kyoto", value: 4 },
    { label: "Osaka", value: 5 },
  ];

  return (
    <div className="searchbarWapper">
      <Select
        options={options}
        placeholder="ex. Shinjuku"
        backspaceRemovesValue
        isClearable
        escapeClearsValue
        closeMenuOnSelect
        openMenuOnClick={false}
      />
    </div>
  );
};

export default Searchbar;
