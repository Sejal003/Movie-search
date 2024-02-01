import { NavLink, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const SingleMovie = () => {
  const { id } = useParams();
  console.log(id);

  const { isLoading, movie, isError } = useFetch(`&i=${id}`);

  if (isLoading) {
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>;
      </section>
    );
  }

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.url} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.name}</p>
          {/* <p className="">{movie.summary}</p> */}
          {/* <p className="card-text">{movie.premiered}</p> */}
          <p className="card-text">{movie.type}</p>
          {/* <p className="card-text">{movie.rating} / 10</p> */}
          <p className="card-text">{movie.language}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;