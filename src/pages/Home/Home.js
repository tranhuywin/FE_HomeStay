import React from "react";
import "./Home.scss";
import Hero from "./Hero/Hero";
import ListCardTrending from "./TrendingSuggest/ListCardTrending";
import SuggestRoom from "./ListRoom/SuggestRoom";
import Header from "../../components/Header/Header";

function Home() {
  return (
    <>
      <header>
        <Header />
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
