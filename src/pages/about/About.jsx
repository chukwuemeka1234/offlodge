import Header from '../../components/Header'
import HeaderImage from '../../images/head-about.jpg'
import StoryImage from '../../images/story-img.jpg'
import VisionImage from '../../images/vision-img.jpg'
import MissionImage from '../../images/mission-img.jpg'
import './about.css';

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias, officiis nam quia omnis blanditiis eveniet error. Nemo cupiditate omnis dolorum esse, commodi deleniti pariatur mollitia eum ullam quod animi?
    </Header>
    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Story Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, magnam eius? Ea quidem deleniti quasi.
          </p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam nisi fugit laboriosam illum qui laudantium doloremque.
          </p>
          <p>soluta consequuntur debitis eligendi dolores optio, repudiandae odit alias et dolore veritatis ipsam recusandae.
          </p>
        </div>
      </div>
    </section>
    <section className="about__vision">
      <div className="container about__vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, magnam eius? Ea quidem deleniti quasi, cum nemo dolorum error corporis ducimus, voluptatibus, dolorem esse veniam cupiditate odio dicta aut fugiat.
          </p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam nisi fugit laboriosam illum qui laudantium doloremque.
          </p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Our Vision Image" />
        </div>
      </div>
    </section>
    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our Mission Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, magnam eius? Ea quidem deleniti quasit.
          </p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam nisi fugit laboriosam illum qui laudantium doloremque.
          </p>
          <p>soluta consequuntur debitis eligendi dolores optio, repudiandae odit alias et dolore veritatis ipsam recusandae.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About