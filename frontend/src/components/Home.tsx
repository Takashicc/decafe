import { useState } from "react";
import Header from "./Header";
import Searchbar from "./Searchbar";
import SearchResult from "./SearchResult";

export type SearchbarOptions = {
  label: string;
  value: string;
};

const Home = () => {
  const [selectedOption, setSelectedOption] = useState<SearchbarOptions | null>(
    null
  );

  return (
    <>
      <Header />
      <Searchbar
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      {selectedOption !== null ? (
        <SearchResult selectedOption={selectedOption} />
      ) : null}
    </>
  );
};

export default Home;
