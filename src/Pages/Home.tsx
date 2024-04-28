import React from "react";
import { MainNewsList, Slider } from "../Components";

function Home() {
  return (
    <div className="fading-in">
      <Slider />
      <MainNewsList />
    </div>
  );
}

export default Home;
