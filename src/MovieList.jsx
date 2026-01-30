import { useState } from "react";
import { Movie } from "./Movie";
import { INITIAL_MOVIES } from "./movies-data";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

// Smart
function MovieList({ movies, setMovies }) {
  // Todo: Hook variable

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  // Object short-hand - when newMovie updates?
  // Derived state - msg, newMovie

  // const msg = `Hello, ${name}`

  const newMovie = {
    name: name,
    poster: poster,
    rating: rating,
    summary: summary,
  };

  console.log(newMovie);

  return (
    <div>
      <div className="add-movie-form-container">
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          value={poster}
          onChange={(event) => setPoster(event.target.value)}
          type="text"
          placeholder="Poster"
        />
        <input
          value={rating}
          onChange={(event) => setRating(event.target.value)}
          type="text"
          placeholder="Rating"
        />
        <input
          value={summary}
          onChange={(event) => setSummary(event.target.value)}
          type="text"
          placeholder="Summary"
        />
        {/* Copy movies + new movie */}

        <Button
          variant="contained"
          onClick={() => setMovies([newMovie, ...movies])}
        >
          Add Movie
        </Button>
      </div>

      {/* <h1>
        {name} | {poster} | {rating} | {summary}{" "}
      </h1> */}

      <section className="movie-list-container">
        {/* Todo: Add movie form - 4 x inputs */}

        {/* Copy movies + new movie */}
        {movies.map((mv) => (
          <Movie movie={mv} />
        ))}
      </section>
    </div>
  );
}

export default MovieList;