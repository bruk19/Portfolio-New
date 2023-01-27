import React from 'react'
import './Home.scss'
import { Link } from 'react-scroll';
import Resume from '../../Resume/Bruk - CV.pdf';

const Home = () => {
  
  return (
    <div className='all-home'>
     <div className='intro-bruk' id='nav'>
      <div className='home-an'>
        <h2 className='home-t'>Hey, I'm Bruk</h2>
        <span className='home-span'>A Software Developer</span>
        <div className="Home">
          <p>Your product deserve state-of-the-art technology. I can help you create a product,
             a feature, a web application that meets your expectations. take your time and browse some
              of my work and experience! If you like what you see and have a project, a request you 
            need, or simpy want to collaborate with me, do not hesitate to contact me.</p>
        </div>
        <div className='cv'>
      <Link
            to="cont"
            spy
            smooth
            offset={-50}
            duration={1000}
            delay={100}
          >
            <button type="button" className="res-b">
              Contact Me
            </button>
          </Link>
          <a href={Resume} rel="noreferrer" className="btn-cv" target="_blank">
            My Resume
          </a>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Home