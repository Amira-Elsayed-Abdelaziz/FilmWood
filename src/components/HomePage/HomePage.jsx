import React from "react";
import "./HomePage.css";
import HomeCarousel from "./HomeCarousel.jsx/HomeCarousel";
import Trending from "./Trending/Trending";
import Trailer from "./Trailer/Trailer";

function HomePage() {
  return (
    <div className="home">
      <HomeCarousel />
      {/* next section */}
      <Trending />
      {/* next section */}
      <Trailer />
    </div>
  );
}

export default HomePage;
