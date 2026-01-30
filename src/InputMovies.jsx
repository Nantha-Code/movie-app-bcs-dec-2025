// import { useState } from "react";
// import { MovieDetails } from "./Movie";
// import { INITIAL_MOVIES } from "./movies-data";

// // Smart
// export function InputMovies() {
//   // Todo: Hook variable
//   const [movies, setMovies] = useState(INITIAL_MOVIES);
//   const [name, setName] = useState("");
//   const [poster, setPoster] = useState("");
//   const [rating, setRating] = useState("");
//   const [summary, setSummary] = useState("");

//   const newMovie = {
//     name: name,
//     poster: poster,
//     rating: rating,
//     summary: summary,
//   };

//   return (
//     <div>
//       <div className="add-movie-form-container">
//         <input
//           value={name}
//           onChange={(event) => setName(event.target.value)}
//           type="text"
//           placeholder="Name"
//         />
//         <input
//           value={poster}
//           onChange={(event) => setPoster(event.target.value)}
//           type="text"
//           placeholder="Poster"
//         />
//         <input
//           value={rating}
//           onChange={(event) => setRating(event.target.value)}
//           type="text"
//           placeholder="Rating"
//         />
//         <input
//           value={summary}
//           onChange={(event) => setSummary(event.target.value)}
//           type="text"
//           placeholder="Summary"
//         />
//         {/* Copy movies + new movie */}
//         <button onClick={() => setMovies([newMovie, ...movies])}>
//           Add Movie
//         </button>
//       </div>

//       {/* <h1>
//         {name} | {poster} | {rating} | {summary}{" "}
//       </h1> */}

//       <section className="movie-list-container">
//         {/* Todo: Add movie form - 4 x inputs */}

//         {/* Copy movies + new movie */}
//         {movies.map((mv) => (
//           < movie={mv} />
//         ))}
//       </section>
//     </div>
//   );
// }


















// // import React from 'react'
// // import "./App.css"

// // function InputMovies() {
// //   return (
// //      <label className='label'>
// //     <input type="url" placeholder='url' className='url'/>
// //     <input type="text" placeholder='tittle' className='tittle'/>
// //     <input type="text"placeholder='rating'className='rating'/>
// //     <input type="text"placeholder='summary'className='summary'/>
// //     <button className='add'>Add</button>
// //      </label>
// //   );
// // }

// // export default InputMovies;