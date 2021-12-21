import React from "react";
import "./Home.scss";
import Hero from "./Hero/Hero";
import ListCardTrending from "./TrendingSuggest/ListCardTrending";
import SuggestRoom from "./ListRoom/SuggestRoom";
import HeaderV2 from "../../components/Header/HeaderV2";

function Home() {
  return (
    <>
      <header>
        <HeaderV2 />
      </header>
      <div className="home">
        <Hero />
        <div className="container">
          <ListCardTrending />
          <SuggestRoom />
        </div>
      </div>
    </>
  );
}

export default Home;
