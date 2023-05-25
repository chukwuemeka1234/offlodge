import Header from '../../components/Header';
import HeaderImage from '../../images/main-header-img.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'

import './contact.css';

const Contact = () => {
  return (
    <>
    <Header title="Get in touch" image={HeaderImage}>
    Architecto at perspiciatis repellat aut vero quaerat odit quam quis voluptate eaque ullam veniam omnis, possimus id rerum? Recusandae autem atque cumque.
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:chimdiebubev@gmail.com" target="_blank" rel="noreferrer"><MdEmail/></a>
          <a href="http://m.me/ani.victor.chukwuemeka" target="_blank" rel="noreferrer"><BsMessenger/></a>
          <a href="https://wa.me/+2347065127989" target="_blank" rel="noreferrer"><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact