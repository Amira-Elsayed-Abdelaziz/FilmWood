import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomeCarousel() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide home-carousel"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v1/variant/disney/b556459c-eaf1-4c9d-aafa-31ef2cc2a9fd/scale?width=2880&format=webp"
            className=""
            alt="..."
          />
          <div className="shadow"></div>
          <div className="carousel-caption">
            <h1>Uncover Stories Worth Watching</h1>
            <hr />
            <p>
              There are millions of stories out there — some loud and bold,
              others quiet and powerful. Our platform helps you uncover the ones
              that matter. From award-winning masterpieces to underrated gems
              waiting to be found, each film in our library is handpicked to
              ensure it offers something special. These aren’t just movies;
              they’re moments that leave a mark.
            </p>
            <button className="btn btn-one">
              <Link className=" link-no-decoration" to="/Sign-up">
                Join Us
              </Link>
            </button>
            <button className="btn btn-two">
              <Link className=" link-no-decoration" to="/About-us">
                Get More Info
              </Link>
            </button>
          </div>
        </div>
        <div className="carousel-item ">
          <img
            src="https://wallpapercat.com/w/full/c/a/5/136319-3840x2160-desktop-4k-the-hobbit-wallpaper-photo.jpg"
            className=""
            alt="..."
          />
          <div className="shadow"></div>
          <div className="carousel-caption">
            <h1>Dive Into the World of Movies</h1>
            <hr />
            <p>
              Get ready to lose yourself in the endless depths of cinema. With
              just one click, you can explore countless worlds, meet
              unforgettable characters, and experience emotions that resonate
              long after the credits roll. Whether you’re craving suspense,
              laughter, love, or a mind-bending twist, our carefully curated
              collection is designed to pull you into the heart of every story.{" "}
            </p>
            <button className="btn btn-one">
              <Link className=" link-no-decoration" to="/Sign-up">
                Join Us
              </Link>
            </button>
            <button className="btn btn-two">
              <Link className=" link-no-decoration" to="/About-us">
                Get More Info
              </Link>
            </button>
          </div>
        </div>
        <div className="carousel-item ">
          <img
            src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701130290.jpg"
            className=""
            alt="..."
          />
          <div className="shadow"></div>
          <div className="carousel-caption">
            <h1>Your Next Favorite Movie Is Just a Click Away</h1>
            <hr />
            <p>
              We know how hard it can be to pick the next thing to watch. That’s
              why we’ve made it easier than ever to discover your next favorite
              film. With smart recommendations, trending titles, and carefully
              curated collections, you’ll spend less time searching and more
              time watching. Fall in love with stories you didn’t even know you
              were looking for.
            </p>
            <button className="btn btn-one">
              <Link className=" link-no-decoration" to="/Sign-up">
                Join Us
              </Link>
            </button>
            <button className="btn btn-two">
              <Link className=" link-no-decoration" to="/About-us">
                Get More Info
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCarousel;
