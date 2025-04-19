import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Trailer() {
  return (
    <>
      <div className="d-flex flex-column trailer">
        <h1 className="mx-5">
          <i class="fa-solid fa-play mx-4"></i>New Trailer
        </h1>
        <hr className="col-11 align align-self-center" />
      </div>
      {/* next section */}
      <div className="video">
        <iframe
          className="w-100 h-100"
          src="https://www.youtube.com/embed/g4Hbz2jLxvQ"
          title="SPIDER-MAN: INTO THE SPIDER-VERSE - Official Trailer (HD)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}

export default Trailer;
