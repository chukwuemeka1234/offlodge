import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__continer">
        <link to="/" className='logo'>
          <img src={Logo} alt="Nav logo" />
        </link>
        nav links
        nav buttons
      </div>
    </nav>
  )
}

export default Navbar