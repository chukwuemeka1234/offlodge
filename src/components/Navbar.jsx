import {Link, NavLink} from 'react-router-dom'
import Logo from '../images/1.png'
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__continer">
        <Link to="/" className='logo'>
          <img src={Logo} alt="Nav logo" />
        </Link>
        nav links
        nav buttons
      </div>
    </nav>
  )
}

export default Navbar