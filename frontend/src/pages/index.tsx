import { useState } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import SearchResult from "@/components/SearchResult";

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
