import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
  console.log(movies);
  return (
    <div className="mainDiv">
      {movies &&
        movies.map((movie) => (
          <div className="postContainer0" key={movie.id}>
            <div
              className="postContainer"
              onClick={() => {
                navigate(`../movieDetails/${movie.movieId}`);
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className="posterImage"
                alt="moviePoster"
              />
            </div>
            <div className="movieDescreption">
              <div className="movieTitle">
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

export default WatchedList;
