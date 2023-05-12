import React from "react";
import Navbar from "../components/Navbar";
import Feed from "./Feed/Feed";

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <Feed />
    </div>
  );
};

export default Home;
