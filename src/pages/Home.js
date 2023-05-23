import React from "react";
import Feed from "./Feed/Feed";
import Login from "./Auth/Login";

const Home = () => {
  const token = window.localStorage.getItem("token")

  return (
    <div className="App">
      {
        token ? (<Feed />) : (<Login />)
      }

    </div>
  );
};

export default Home;
