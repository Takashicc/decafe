import styles from "@/styles/components/organisms/SearchBar.module.scss";
import { useEffect, useState } from "react";
import useDebouncedQuery from "@/hooks/DebouncedQuery";
import Select from "react-select";
import { findAllUniqueCities } from "@/api";
import Link from "next/link";

interface SearchBarProps {
  setSelectedCity: React.Dispatch<React.SetStateAction<string | null>>;
}

interface CityOption {
  label: string;
  value: string;
}

const SearchBar = ({ setSelectedCity }: SearchBarProps) => {
  const [options, setOptions] = useState<CityOption[]>([]);
  const [displayOptions, setDisplayOptions] = useState<CityOption[]>();
  const [inputValue, setInputValue] = useDebouncedQuery(async (query) => {
    const result: CityOption[] = [];
    for (let i = 0; i < options.length; i++) {
      const label = options[i].label;
      const value = options[i].value;
      if (label.toLowerCase().includes(query.toLowerCase())) {
        result.push({
          label,
          value,
        });
      }
    }

    setDisplayOptions(result);
  });

  const handleInputChange = (newValue: string) => {
    setInputValue(newValue.replace(/\W/g, ""));
  };

  const handleChange = (cityOption: CityOption | null) => {
    if (cityOption !== null) setSelectedCity(cityOption.label);
  };

  useEffect(() => {
    (async () => {
      const cities = await findAllUniqueCities();
      const result: CityOption[] = [];
      for (let i = 0; i < cities.length; i++) {
        const city = cities[i].city;
        result.push({
          label: city.substring(0, 1).toUpperCase() + city.substring(1),
          value: city,
        });
      }
      setOptions(result);
      setDisplayOptions(result);
    })();
  }, []);

  return (
    <div className={styles.search_bar_wrapper}>
      <div className={styles.logo_center}>
        <Link href="/">
          <img
            src="images/decafelogo.png"
            className={styles.logo}
            alt="decafe logo"
          ></img>
        </Link>
      </div>
      <Select
        inputValue={inputValue}
        onInputChange={handleInputChange}
        options={displayOptions}
        onChange={handleChange}
        placeholder="ex. Boston"
        maxMenuHeight={200}
      />
    </div>
  );
};

export default SearchBar;
