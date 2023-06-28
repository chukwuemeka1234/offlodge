import {Link} from 'react-router-dom'
import Image from '../images/main-img-bg.png'

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkout</h4>
          <h1>Welcome to the fitness World</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente saepe neque dolorem ullam soluta ut! Maiores, quae voluptas repellendus molestiae doloribus sit voluptates nostrum ad, explicabo corporis temporibus exercitationem. Ad.
          </p>
          <Link to="/plans" className='btn lg'>Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main header image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader