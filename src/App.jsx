import MovieDetails from './MovieDetails';
import { Route, Routes, Link } from 'react-router';



function App() {
  return (
  <>
  {/* <InputMovies/> */}
  {/* <ColorGame/> */}
  {/* <ColorBox/> */}
  {/* <ColorChanger/> */}
  {/* <UserDetails/> */}
  {/* <MovieDetails/> */}
  {/* <InputTags/> */}



<nav>
  <Link to="/movies">Movies</Link>
</nav>

<Routes>
  <Route path="movies"element={<MovieDetails/>}/>
</Routes>

  </>
  );
}

export default App;