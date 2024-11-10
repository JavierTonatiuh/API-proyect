import {Link, NavLink} from 'react-router-dom'
import styles from './Navbar.module.css'
import './styles.css'

function Navbar() {
  return (
    <nav className={styles.nav}>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/movies">Movies</NavLink>
            </li>
            <li>
                <NavLink to="/people">Characters</NavLink>
            </li>
            <li>
                <NavLink to="/planets">Planets</NavLink>
            </li>
            <li>
                <NavLink to="/spaceships">Spaceships</NavLink>
            </li>
            <li>
                <NavLink to="/species">Species</NavLink>
            </li>
            <li>
                <NavLink to="/vehicles">Vehicles</NavLink>
            </li>
        </ul>



    </nav>
  )
}

export default Navbar