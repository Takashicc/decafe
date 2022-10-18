import { useState } from "react";
import Header from "@/components/organisms/Header";
import SearchBar from "@/components/organisms/SearchBar";
import SearchResult from "@/components/organisms/SearchResult";

const Index = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  return (
    <>
      <Header />
      <SearchBar setSelectedCity={setSelectedCity} />
      {selectedCity && <SearchResult selectedCity={selectedCity} />}
    </>
  );
};

export default Index;
