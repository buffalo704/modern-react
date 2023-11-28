import { createRandomMovie } from "../data";
import {useDispatch, useSelector} from "react-redux";
import {addMovie, removeMovie} from "../store";

interface MovieState {
  movies: string[];
}

function MoviePlaylist() {
  const dispatch = useDispatch();
    const moviePlaylist = useSelector((state: MovieState) => state.movies);

  const handleMovieAdd = (movie: string) => {
    dispatch(addMovie(movie));
  };
  const handleMovieRemove = (movie: string) => {
    dispatch(removeMovie(movie));
  };

  const renderedMovies = moviePlaylist.map((movie: string) => {
    return (
      <li key={movie}>
        {movie}
        <button
          onClick={() => handleMovieRemove(movie)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Movie Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleMovieAdd(createRandomMovie())}
            className="button is-link"
          >
            + Add Movie to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;
