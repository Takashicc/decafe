import Header from "./Header";
import { useEffect, useState } from "react";
import AuthHeader from "./AuthHeader";
import Searchbar from "./Searchbar";
import SearchResult from "./SearchResult";

const Home = ({ loggedIn }: any) => {
  const [selected, setSelected] = useState<any>(null);

  console.log("setSelected home ", setSelected);

  return (
    <>
      {loggedIn === false ? <Header /> : <AuthHeader />}
      <Searchbar selected={selected} setSelected={setSelected} />
      {selected !== null ? <SearchResult selected={selected} /> : null}
    </>
  );
};

export default Home;
