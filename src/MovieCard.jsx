import { useState } from "react";
import InputTags from "./InputTags";

function MovieCard({ name, poster, rating, summary }) {
  const [show, setShow] = useState(true);

  return (
    <div className="movie-card">
      <img src={poster} alt={name} className="movie-img" />

      <div className="title-text">
        <h3>
          {name}
          <span className="rating">⭐ {rating}</span>
        </h3>
      </div>

      <div className="action-buttons">
        <button onClick={() => setShow(!show)} className="toggle">
          Toggle
        </button>
        <button>Delete</button>
      </div>

      <div className="para">
        {show ? <p className="summary">{summary}</p> : null}
      </div>

      <div className="like-dislike"></div>

      <InputTags />
    </div>
  );
}

export default MovieCard;
