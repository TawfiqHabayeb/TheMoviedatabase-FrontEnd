import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../component/Footer";

const MovieDetails = () => {
  const [movieDetails, setMovieDetail] = useState({});
  const [actors, setActors] = useState({});

  const { id } = useParams();

  const getDetails = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=92cf4fd96a89a19dac8feb0f3399e64e`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setMovieDetail(result))
      .catch((error) => console.log("error", error));
  };
  const getActors = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=8d93590a0dee93ef264a94b3755603f8`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setActors(result.cast))
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    getDetails();
    getActors();
  }, []);

  return (
    <>
      <div className="movieDetailsBG1">
        <div className="movieDetails0">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            className="movieDetailsIMG1"
          />
        </div>
        <div className="movieDetails1">
          <div className="movieDetails1part1">
            <p className="movieDetailsTitle"> {movieDetails.title} </p>
            <p className="movieDetailsOverview"> {movieDetails.overview} </p>
          </div>
        </div>
      </div>

      <div className="castCont">
        <h3 classname="movieDetails"> Movie Cast</h3>
        <div div className="movieDetails1part2">
          {actors && !!actors.length ? (
            actors.map((a) => {
              return (
                <div className="postContainer0" key={a.id.toString()}>
                  <div className="postContainer">
                    <img
                      src={
                        a.profile_path
                          ? `https://image.tmdb.org/t/p/w500/${a.profile_path}`
                          : ""
                      }
                      className="posterImage"
                    />
                  </div>
                  <div className="movieDescreption">
                    <div className="movieTitle">
                      <p>{a.original_name}</p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MovieDetails;
