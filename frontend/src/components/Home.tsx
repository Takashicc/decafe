import { useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

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
