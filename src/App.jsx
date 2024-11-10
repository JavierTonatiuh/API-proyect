import {Routes, Route, Link} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import Home from './pages/Home';
import Movies from './pages/Movies';
import People from './pages/People';
import Planets from './pages/Planets';
import Spaceships from './pages/Spaceships';
import Species from './pages/Species';
import Vehicles from './pages/Vehicles';
import Navbar from './Layouts/Navbar';

function App() {
  const URL_BASE = 'https://swapi.dev/api/'
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>

      <Route path="/movies">
      <Route index={true} element={<Movies/>}/>
      </Route>

      <Route path="/people">
      <Route index={true} element={<People/>}/>
      </Route>

      <Route path="/planets">
      <Route index={true} element={<Planets/>}/>
      </Route>

      <Route path="/spaceships">
      <Route index={true} element={<Spaceships/>}/>
      </Route>

      <Route path="/species">
      <Route index={true} element={<Species/>}/>
      </Route>

      <Route path="/vehicles">
      <Route index={true} element={<Vehicles/>}/>
      </Route>


    </Routes>
    </>
  )
}

export default App