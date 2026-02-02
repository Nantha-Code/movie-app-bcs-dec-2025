// 


import { useEffect, useState } from "react";

function Delete() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://6971eb5e32c6bacb12c50344.mockapi.io/api/v1/movies")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // 👈 runs once on mount

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div>
      <h2>Movies from API</h2>
      {movies.map((movie) => (
        <div key={movie.id}>
          <p>{movie.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Delete;
