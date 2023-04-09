import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../component/Header";
const WatchedList = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const getMovies = () => {
      fetch(
        `http://localhost:3001/GetWatchedMovies?userId=${userId}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => setMovies(data))
        .catch((error) => console.log("error", error));
    };
    getMovies();
  }, []);

  return (
    <>
      <Header />

      <div className="MovieSearchCon">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="moviesearch"
            onClick={() => {
              navigate(`../movieDetails/${movie.movieId}`);
            }}
          >
            <div className="moviesearch1">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="moviePoster"
              />
            </div>
            <div className="moviesearch2">
              <h2>{movie.title}</h2>
              <p>{movie.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WatchedList;
