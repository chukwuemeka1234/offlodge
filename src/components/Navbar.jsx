import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../images/2.png'
import {links} from '../data'
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'
import './navbar.css'

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className="container nav__continer">
        <Link to="/" className='logo'>
          <img src={Logo} alt="Nav logo" />
        </Link>
        <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
          {
            links.map(({name, path}, index) => {
              return (
                <li key={index}>
                  <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''}>{name}</NavLink>
                </li>
              )
            })
          }
        </ul>
        <button className="nav__toggle-btn" onClick={() => setIsNavShowing (!isNavShowing)}>
          {
            isNavShowing ? <MdOutlineClose/> : <GoThreeBars/>
          }
        </button>
      </div>
    </nav>
  )
}

export default Navbar