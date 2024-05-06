import React from 'react';
import './home.css';

import backgroundImage1 from '../assests/Background/backround1.png';
import backgroundImage2 from '../assests/Background/backround2.png';
import backgroundImage3 from '../assests/Background/backround3.png';
import backgroundImage4 from '../assests/Background/background4.png';
import  WhatsApp  from '../assests/icons/whatsapp.png';

export default function Home() {


  return (<>
    <div className='home'>
      <div class="wrapper">
        <header>
          <img src={backgroundImage3} alt='image1' class="hill" />
          <img src={backgroundImage2} alt='image2' class="grass" />
          <img src={backgroundImage1} alt='image3' class="waterfall" />
          <img src={backgroundImage4} alt='image4' class="hero" />
          <div style={{width:"40%",marginLeft:"-40%",marginTop:"-3%"}}>
            <h1 className='title'>Travel Experience with a positive impact</h1>
            <p>Embark on a journey through breathtaking landscapes, conquer rugged terrains,
              and immerse yourself in the serenity of nature. Trekking offers not just physical challenges,
              but also moments of profound connection with the world around us. Whether it's the crisp mountain air,
              the rustling of leaves in dense forests, or the majestic vistas that await at the summit,
              every step of the trek is a step closer to discovering the beauty of our planet.</p>

          </div>
        </header>

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
                  <p>Happy Adventurers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="featured-section">
          <h2> Treks & Destinations</h2>
          <div className="featured-treks">
            {/* Featured Trek/Destination Cards */}
            <div className="trek-card">
              <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJla2tpbmd8ZW58MHx8MHx8fDA%3D" alt="Featured Trek 1" />
              <div className="trek-details">
                {/* <h3>Bramagiri</h3> */}
              </div>
            </div>

            <div className="trek-card">
              <img src="https://www.shutterstock.com/image-photo/group-four-hikers-backpacks-walks-260nw-1909533559.jpg" alt="Featured Trek 2" />
              {/* <div className="trek-details">
       
      </div> */}
            </div>
            <div className="trek-card">
              <img src="https://www.shutterstock.com/image-photo/group-four-hikers-backpacks-walks-260nw-1909533559.jpg" alt="Featured Trek 2" />

            </div>
            <div className="trek-card">
              <img src="https://www.shutterstock.com/image-photo/group-four-hikers-backpacks-walks-260nw-1909533559.jpg" alt="Featured Trek 2" />

            </div>

          </div>
        </section>





        {/* About Us */}
        <section className="about-us">
          {/* Add information about your adventure company here */}
        </section>



        
        <section class="photos">
  <h2>Photo Gallery</h2>
  <div class="photo-grid">
    <div class="photo">
      <img src="trek1.jpg" alt="Trekking Photo 1"/>
    </div>
    <div class="photo">
      <img src="trek2.jpg" alt="Trekking Photo 2"/>
    </div>
    <div class="photo">
      <img src="trek3.jpg" alt="Trekking Photo 3"/>
    </div>
    <div class="photo">
      <img src="trek3.jpg" alt="Trekking Photo 3"/>
    </div>
    <div class="photo">
      <img src="trek3.jpg" alt="Trekking Photo 3"/>
    </div>
    
  </div>
</section>


        {/* Customer Reviews/Testimonials */}
        <section class="customer-reviews">
  <h2>Customer Reviews</h2>
  <div class="review">
    <div class="review-content">
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
      <span class="review-author">- John Doe</span>
    </div>
  </div>
  <div class="review">
    <div class="review-content">
      <p>"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
      <span class="review-author">- Jane Smith</span>
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
        <img alt='whatsapp icon'  className="whatsapp" src={WhatsApp}/>
      </a>
    </>
  );
}
