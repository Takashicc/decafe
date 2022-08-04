import Header from "./Header";
import AuthHeader from "./AuthHeader";
import Searchbar from "./Searchbar";
import { useState } from "react";

const Home = ({ loggedIn }: any) => {
  return (
    <>
      {loggedIn === false ? <Header /> : <AuthHeader />}
      <Searchbar />
    </>
  );
};

export default Home;
