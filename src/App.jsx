import { Link, Route, Routes } from 'react-router';
import ColorGame from './ColorGame';
import MovieList from './InputMovies';
import MovieDetails from './MovieDetails';
import NotFound from './NotFound';
import UserDetails from './UserDetails';



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
  {/* <li><Link to="/list">List</Link></li> */}
</ul>
</nav>

<Routes>
  <Route path="movies"element={<MovieDetails/>}/>
  <Route path="colorgame"element={<ColorGame/>}/>
  <Route path="user"element={<UserDetails/>}/>
  <Route path="list"element={<MovieList/>}/>

  {/*    * -> catch all -> Always last      */}
  <Route path="*" element={<NotFound />} />

</Routes> 

  </>
  );


}

export default App;