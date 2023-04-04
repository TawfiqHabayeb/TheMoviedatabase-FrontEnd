import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SearchPage = () => {
  const { query } = useParams();
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const getMovies = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      ` https://api.themoviedb.org/3/search/movie?year=24717925&primary_release_year=24717925&query=${query}&api_key=92cf4fd96a89a19dac8feb0f3399e64e`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    getMovies();
  }, [query]);

  return (
    <div className="MovieSearchCon">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="moviesearch"
          onClick={() => {
            navigate(`../movieDetails/${movie.id}`);
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
            <p>{movie.overview}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchPage;
