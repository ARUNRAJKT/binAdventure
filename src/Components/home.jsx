import React from 'react';
import './home.css';
import Card from './cards';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import backgroundImage1 from '../assests/Background/backround1.png';
import backgroundImage2 from '../assests/Background/backround2.png';
import backgroundImage3 from '../assests/Background/backround3.png';
import backgroundImage4 from '../assests/Background/background4.png';
import WhatsApp from '../assests/icons/whatsapp.png';
import PhotoGrid from './photoGrid';

export default function Home() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  let cardData = [
    {
      imgSrc: "https://media2.thrillophilia.com/images/photos/000/035/746/original/chokra11.jpg?width=1600&height=775",
      title: "Chokramudi",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam."
    },
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzLbRUpYsuN4D-6F3fETvKgXhscFCBRVYH3eeVUz_g-g&s",
      title: "Nethravathi",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam."
    },
    {
      imgSrc: "https://miro.medium.com/v2/resize:fit:960/1*qrTIa_bv1UKf1zvp_o1weA.jpeg",
      title: "Kudremukh",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam."
    },
    {
      imgSrc: "https://media1.thrillophilia.com/filestore/r9p12pnhzrj7ugun4gwxt5p9hlm4_Kumara%20Parvatha%20-%20Backpackers%20united%202020-06.jpg",
      title: "Kumara Parvatha",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam."
    },
    {
      imgSrc: "https://cdn.tripuntold.com/media/photos/location/2018/10/03/33120f29-ddc3-4175-8e0a-5c16570aabbb.jpg",
      title: "Brahmagiri",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam."
    },
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBaSUjz_I9ShO5kSoNBZmZH_owZKkQDUHX653_IpeujA&s",
      title: "Banasura",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam."
    },
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzBh3gJEAsMzR2YFbHJWFV9jh3dUZ9zB9OgtiG0ceJPw&s",
      title: "Harihar",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam."
    }
  ];

  return (<>
    <div className='home'>
      <div className="wrapper">
        <header>
          <img src={backgroundImage3} alt='image1' className="hill" />
          <img src={backgroundImage2} alt='image2' className="grass" />
          <img src={backgroundImage1} alt='image3' className="waterfall" />
          <img src={backgroundImage4} alt='image4' className="hero" />
          <div className="glass-container" style={{ width: "40%", marginLeft: "-40%", marginTop: "-6%" }}>
            <h1 className='title'>Travel Experience with a Positive Impact . . .</h1>
            <p className='subPara'>
              Embark on a journey through breathtaking landscapes, conquer rugged terrains,
              and immerse yourself in the serenity of nature. Trekking offers not just physical challenges,
              but also moments of profound connection with the world around us. Whether it's the crisp mountain air,
              the rustling of leaves in dense forests, or the majestic vistas that await at the summit,
              every step of the trek is a step closer to discovering the beauty of our planet.
            </p>
            <div className="social-media-buttons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="facebook-icon.png" alt="Facebook" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="twitter-icon.png" alt="Twitter" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="instagram-icon.png" alt="Instagram" />
              </a>
            </div>
          </div>

        </header>

        <section className="featured-section">
          <h2 style={{ color: "black" }}> Treks & Destinations</h2>
          <div style={{ padding: "4%" }}>
            <Carousel
              responsive={responsive}
              autoPlay={true}
              swipeable={true}
              draggable={true}
              showDots={true}
              infinite={true}
              partialVisible={false}
            >
              {cardData.map((card, index) => (
                <Card
                  key={index}
                  imgSrc={card.imgSrc}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </Carousel>
          </div>
        </section>





        <section id='intro' className="intro-section">
          <div className='about-wrapper'>
            <div className='about-image'>
            </div>
            <div className="intro-content">
              <h2>Welcome to Bin Adventures</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
              <div className="milestones">
                <div className="milestone">
                  <span>3 Years</span>
                  <p>Experience</p>
                </div>
                <div className="milestone">
                  <span>129+</span>
                  <p>Treks</p>
                </div>
                <div className="milestone">
                  <span>300+</span>
                  <p>Adventurers</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 
        <section className="featured-section">
          <h2 className='trek_title'> Treks & Destinations</h2>
          <div style={{padding:"4%", display:"flex", justifyContent:"space-between", flexWrap: "wrap"}}>
          {cardData.map((card, index) => (
            <div className="card">
              <img
                className="card__background"
                src={cardData.imgSrc}
                // src="https://i.imgur.com/QYWAcXk.jpeg"
                alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                width="1920"
                height="2193"
              />
              <div className="card__content | flow">
                <div className="card__content--container | flow">
                  <h2 className="card__title">{cardData.title}</h2>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
                    labore laudantium deserunt fugiat numquam.
                  </p>
                </div>
                <button className="card__button">Read more</button>
              </div>

            </div>
             ))}
            <div className="card">
              <img
                className="card__background"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzLbRUpYsuN4D-6F3fETvKgXhscFCBRVYH3eeVUz_g-g&s"
                alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                width="1920"
                height="2193"
              />
              <div className="card__content | flow">
                <div className="card__content--container | flow">
                  <h2 className="card__title">Nethravathi</h2>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
                    labore laudantium deserunt fugiat numquam.
                  </p>
                </div>
                <button className="card__button">Read more</button>
              </div>

            </div>
            <div className="card">
              <img
                className="card__background"
                src="https://miro.medium.com/v2/resize:fit:960/1*qrTIa_bv1UKf1zvp_o1weA.jpeg"
                alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                width="1920"
                height="2193"
              />
              <div className="card__content | flow">
                <div className="card__content--container | flow">
                  <h2 className="card__title">Kudremukh</h2>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
                    labore laudantium deserunt fugiat numquam.
                  </p>
                </div>
                <button className="card__button">Read more</button>
              </div>

            </div>
            <div className="card">
              <img
                className="card__background"
                src="https://media1.thrillophilia.com/filestore/r9p12pnhzrj7ugun4gwxt5p9hlm4_Kumara%20Parvatha%20-%20Backpackers%20united%202020-06.jpg"
                alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                width="1920"
                height="2193"
              />
              <div className="card__content | flow">
                <div className="card__content--container | flow">
                  <h2 className="card__title">Kumara Parvatha</h2>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
                    labore laudantium deserunt fugiat numquam.
                  </p>
                </div>
                <button className="card__button">Read more</button>
              </div>

            </div>
            <div className="card">
              <img
                className="card__background"
                src="https://cdn.tripuntold.com/media/photos/location/2018/10/03/33120f29-ddc3-4175-8e0a-5c16570aabbb.jpg"
                alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                width="1920"
                height="2193"
              />
              <div className="card__content | flow">
                <div className="card__content--container | flow">
                  <h2 className="card__title">Brahmagiri</h2>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
                    labore laudantium deserunt fugiat numquam.
                  </p>
                </div>
                <button className="card__button">Read more</button>
              </div>

            </div>
            <div className="card">
              <img
                className="card__background"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBaSUjz_I9ShO5kSoNBZmZH_owZKkQDUHX653_IpeujA&s"
                alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                width="1920"
                height="2193"
              />
              <div className="card__content | flow">
                <div className="card__content--container | flow">
                  <h2 className="card__title">Banasura</h2>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
                    labore laudantium deserunt fugiat numquam.
                  </p>
                </div>
                <button className="card__button">Read more</button>
              </div>

            </div>
            <div className="card">
              <img
                className="card__background"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzBh3gJEAsMzR2YFbHJWFV9jh3dUZ9zB9OgtiG0ceJPw&s"
                alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                width="1920"
                height="2193"
              />
              <div className="card__content | flow">
                <div className="card__content--container | flow">
                  <h2 className="card__title">Harihar</h2>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
                    labore laudantium deserunt fugiat numquam.
                  </p>
                </div>
                <button className="card__button">Read more</button>
              </div>

            </div>
          </div>
        </section> */}





    




        <section className="photos">
        <PhotoGrid/>
        </section>



        {/* Customer Reviews/Testimonials */}
        <section className="customer-reviews">
          <h2>Customer Reviews</h2>
          <div className="review">
            <div className="review-content">
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
              <span className="review-author">- John Doe</span>
            </div>
          </div>
          <div className="review">
            <div className="review-content">
              <p>"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
              <span className="review-author">- Jane Smith</span>
            </div>
          </div>
        </section>





        <footer className="footer">
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="social-media">
            <h3>Follow Us</h3>
            <ul>
              <li><a href="https://facebook.com/example"><i className="fab fa-facebook"></i></a></li>
              <li><a href="https://twitter.com/example"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://instagram.com/example"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
          <div className="newsletter">
            <h3>Subscribe to Our Newsletter</h3>
            <form>
              <input type="email" placeholder="Your email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
          <div className="copyright">
            <p>&copy; 2024 Bin Adventures. All rights reserved.</p>
          </div>
        </footer>


      </div>
    </div>
    <a
      href="https://wa.me"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img alt='whatsapp icon' className="whatsapp" src={WhatsApp} />
    </a>
  </>
  );
}
