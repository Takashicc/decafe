import React, { useEffect, useState } from "react";
import Select from "react-select";
import { findAllShops } from "../api";
import "../styles/searchbar.css";
import { SearchbarOptions } from "./Home";

interface SearchbarProps {
  selectedOption: SearchbarOptions | null;
  setSelectedOption: React.Dispatch<
    React.SetStateAction<SearchbarOptions | null>
  >;
}

const Searchbar: React.FC<SearchbarProps> = ({
  selectedOption,
  setSelectedOption,
}) => {
  const [options, setOptions] = useState<SearchbarOptions[]>([]);

  useEffect(() => {
    (async () => {
      const result = await findAllShops();
      const cities: SearchbarOptions[] = result.map((e) => {
        return {
          label: e.city,
          value: e.city,
        };
      });
      const filteredCities = cities.filter(
        (elem, index, self) =>
          self.findIndex((t) => {
            return t.label === elem.label && t.value === elem.value;
          }) === index
      );
      setOptions(filteredCities);
    })();
  }, []);

  const handleChange = (newValue: SearchbarOptions | null) => {
    if (newValue !== null) setSelectedOption(newValue);
  };

  return (
    <div className="searchbarWapper">
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        placeholder="ex. Shinjuku"
        backspaceRemovesValue={true}
        isClearable
        openMenuOnFocus
        blurInputOnSelect
        escapeClearsValue
        openMenuOnClick={false}
        maxMenuHeight={200}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
      />
    </div>
  );
};

export default Searchbar;
