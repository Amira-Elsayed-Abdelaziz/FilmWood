import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Trending() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWU1YTllYmViMGI2OTUwNGYyMjUyNWQ4YjgzOTVlOCIsIm5iZiI6MTc0MzQ4ODA5Mi43Niwic3ViIjoiNjdlYjg0NWM5YmIyOTVkNmVhOGJlYTFlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.KeDdJMlpCXQkpBOerxX2pb_JkEKopR80fVwjEwHX9kc",
    },
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Make GET request to fetch data
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
        options
      )
      .then((response) => {
        setData(response.data);
        console.log(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
    <div className="d-flex my-5 flex-column">
      <h1 className="mx-5">
        <i class="fa-solid fa-arrow-trend-up mx-4"></i>Trends Now
      </h1>
      <hr className="col-11 align align-self-center" />
    </div>

    <div className="card-slider d-flex">
        <div className="carousel-primary">
          {data.results.map((movie) => (
            <div className="card text-bg-dark ">
              <img
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay d-flex flex-column justify-content-between">
                <h4 className="card-title mt-4 text-center">{movie.title}</h4>
                <div>
                <div className="mb-4 d-flex justify-content-evenly">
                  <button className="btn link-no-decoration love-btn"><i class="fa-regular fa-heart"></i></button>
                  <button className="btn link-no-decoration plus-btn"><i class="fa-solid fa-plus"></i></button>
                </div>
                <p className="card-text d-flex justify-content-between">
                  <small ><i class="fa-solid fa-calendar-days mx-2"></i>{movie.release_date}</small>
                  <small className=""><i class="fa-solid fa-star mx-2 text-warning"></i>{movie.vote_average}</small>
                </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Trending;
