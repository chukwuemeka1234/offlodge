import Header from '../../components/Header';
import HeaderImage from '../../images/Gallery-img1.jpg'
import './gallery.css';

const Gallery = () => {
  const galleryLength = 15;
  const images = []

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }

  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui modi esse nisi et, autem vitae placeat ab dolor rerum eveniet praesentium ipsam consectetur incidunt. Animi itaque non consequatur eos consectetur!
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
        {
          images.map((image, index) => {
            return <article key={index}>
              <img src={image} alt={`Gallery Image ${index + 1}`} />
            </article>
          })
        }
        </div>
      </section>
    </>
  )
}

export default Gallery