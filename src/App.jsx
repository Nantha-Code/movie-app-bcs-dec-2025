import ColorGame from './ColorGame';
import MovieDetails from './MovieDetails';
import UserDetails from './UserDetails';
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
<ul>
  <li> <Link to="/movies">Movies</Link></li>
  <li><Link to="/colorgame">Color Game</Link></li>
  <li><Link to="/user">User</Link></li>
</ul>
</nav>

<Routes>
  <Route path="movies"element={<MovieDetails/>}/>
  <Route path="colorgame"element={<ColorGame/>}/>
  <Route path="user"element={<UserDetails/>}/>

</Routes>

  </>
  );
}

export default App;