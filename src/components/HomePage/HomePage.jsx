import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";
import { Link } from "react-router-dom";
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
