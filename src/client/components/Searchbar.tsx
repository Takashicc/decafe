import React, { useEffect, useState } from "react";
import Select from "react-select";
import { getCities } from "../api";
import "../styles/searchbar.css";
interface SearchbarOptions {
  label: string;
  value: string;
}
const Searchbar = ({ selected, setSelected }: any) => {
  const [options, setOptions] = useState<SearchbarOptions[]>([]);

  useEffect(() => {
    (async () => {
      const result = await getCities();
      const cities: SearchbarOptions[] = result.map((e) => {
        return { label: e.city, value: e.city };
      });
      setOptions(cities);
    })();
  }, []);

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
