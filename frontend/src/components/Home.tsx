import { useState } from "react";
import Header from "./Header";
import SearchBar from "./Searchbar";
import SearchResult from "./SearchResult";

export type SearchBarOptions = {
  label: string;
  value: string;
};

const Home = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  return (
    <>
      <Header />
      <SearchBar setSelectedCity={setSelectedCity} />
      {selectedCity && <SearchResult selectedCity={selectedCity} />}
    </>
  );
};

export default Home;
