import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Cardholder = () => {
  const trending = useSelector((state) => state.reducer.trending);
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    function GetMovies() {
      fetch(
        `https://api.themoviedb.org/3/trending/movie/${trending}?api_key=92cf4fd96a89a19dac8feb0f3399e64e`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => setMovies(data.results))
        .catch((error) => console.log("error", error));
    }
    GetMovies();
  }, [trending]);

  const addToList = () => {

  };

  return (
    <div className="mainDiv">
      {movies &&
        movies.map((movie) => (
          <div className="postContainer0" key={movie.id}>
            <div
              className="postContainer"
              onClick={() => {
                navigate(`../movieDetails/${movie.id}`);
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className="posterImage"
              />
            </div>
            <div className="movieDescreption">
              <div className="movieTitle">
                <h4
                  className="wishButton"
                  onClick={() => {
                    addToList();
                  }}
                >
                  {/* <ImBookmark /> */}
                </h4>
                <p className="movieTitle">{movie.title}</p>
              </div>
              <div className="pubDate">
                <h3>{movie.release_date}</h3>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Cardholder;
