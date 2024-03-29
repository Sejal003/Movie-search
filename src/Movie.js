import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";

const imgUrl = "https://via.placeholder.com/200/200";

const Movie = () => {
  const { movie, isLoading } = useGlobalContext();
  if (isLoading) {
    return <div className="loading">Loading....</div>;
  }

  return (
    <>
       <section className="movie-page">
        <div className="grid grid-4-col">
          {movie
            ? movie.map((curMovieElem) => {
                const { id, name, url } = curMovieElem;
                const movieName = name.substring(0, 15);

                return (
                  <NavLink to={`movie/${id}`} key={id}>
                    <div className="card">
                      <div className="card-info">
                        <h2>
                          {movieName.length > 13
                            ? `${movieName}...`
                            : movieName}
                        </h2>
                        <img src={url === "N/A" ? imgUrl : url} alt="#" />
                      </div>
                    </div>
                  </NavLink>
                );
              })
            : ""}
        </div>
      </section>
    </>
  );
};

export default Movie;