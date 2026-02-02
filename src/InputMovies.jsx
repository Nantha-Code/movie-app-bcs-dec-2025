import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import MovieCard from "./MovieCard";

function InputMovies() {
  const [movies, setMovies] = useState([]); 
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  const newMovie = {
    name,
    poster,
    rating,
    summary,
  };

  return (
    <div>
      <div className="input-box">
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          label="Poster"
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
        />

        <TextField
          label="Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <TextField
          label="Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />

        <Button
          variant="contained"
          onClick={() => {
            setMovies([newMovie, ...movies]);
            setName("");
            setPoster("");
            setRating("");
            setSummary("");
          }}
        >
          Add Movie
        </Button>
      </div>

      {/* MOVIE LIST */}
      <section className="movie-box">
        {movies.map((mv, index) => (
          <MovieCard key={index} {...mv} />
        ))}
      </section>
    </div>
  );
}

export default InputMovies;
