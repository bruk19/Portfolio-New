import React from 'react';
import './media.scss'
import github from '../Assets/github.png';
import twitter from '../Assets/twitter.png';
import linkedin from '../Assets/linkedin.png';
import whatsapp from '../Assets/whatsapp.png';
import pinterest from '../Assets/pinterest.png';
import instagram from '../Assets/instagram.png';

const Media = () => {
  return (
    <div>
        <div>
           <ul className="media-list">
             <li className='media'> 
                  <a href="https://github.com/bruk19" target="_blank" rel="noopener noreferrer">
                  <img src={github} alt="github" />
                  </a>
              </li>
              <li className='media'>
                <a href="https://twitter.com/Bruktesh" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="twitter" />
                </a>
              </li>
              <li className='media'>
                <a href="https://www.linkedin.com/in/bruk-teshome/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="linkedin" />
                </a>
              </li>
              <li className='media'>
                <a href="https://wa.me/qr/LJU6LPPJZQCTN1" target="_blank" rel="noopener noreferrer">
                <img src={whatsapp} alt="whatsapp" />
                </a>
              </li>
              <li className='media'>
                <a href="https://www.pinterest.com/brukteshome21/" target="_blank" rel="noopener noreferrer">
                <img src={pinterest} alt="pinterest" />
                </a>
            </li>
            <li className='media'>
              <a href="https://www.instagram.com/bruk_tesh/" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="instagram" />
                </a>
              </li>
             </ul>
          </div>
      </div>
  )
}

export default Media