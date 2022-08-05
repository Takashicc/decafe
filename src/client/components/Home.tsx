import { useEffect, useState } from "react";
import Header from "./Header";
import AuthHeader from "./AuthHeader";
import Searchbar from "./Searchbar";
import SearchResult from "./SearchResult";

const Home = ({ loggedIn }: any) => {
  const [selected, setSelected] = useState<any>(null);

  return (
    <>
      {loggedIn === false ? <Header /> : <AuthHeader />}
      <Searchbar selected={selected} setSelected={setSelected} />
      {selected !== null ? <SearchResult selected={selected} /> : null}
    </>
  );
};

export default Home;
