import React from 'react';
import './Intro.scss'
import img from '../Assets/buraT.jpg';
import Skill from './Skill';

const Intro = () => {
  return (
    <div className='introduction' id='int'>
      <div className="intro-top" >
        <img className='image' src={img} alt="bura" />
        <div className='into-br'>
          <h2>About Me</h2>
          <span className='intro-span'>Who Am I</span>
        <div className="intro-about">
          <p>Full-stack web developer who is passionate about following best coding practices 
            and capable of working under minimal supervision. Pair-programming and remote work aficionado. 
            My specialties include quickly learning new skills and programming languages, problem-solving, 
            responsive design principles, and Digital Marketing Coordinator with extensive experience in building,
            maintaining, and running successful digital marketing campaigns.</p>
        </div>
      </div>
    </div>
      <div className="skills">
        <h3 className="skill-title">Skills</h3>
        <div className="sills-list">
          <Skill />
        </div>
      </div>
    </div>
  )
}

export default Intro