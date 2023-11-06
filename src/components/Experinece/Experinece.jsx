import './Experinece.scss'
import React, { useState } from 'react';
import img1 from '../Assets/crypto.png'
import img2 from '../Assets/movie.png'

const Slide = ({ image, description, jobTitle, companyLocation }) => {
  return (
    <div className="slide">
     
      <img src={image} alt="Experience" />
      <div className="slide-content">
        <h3>{jobTitle}</h3>
        <p>{companyLocation}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

const ExperienceSlider = () => {
  const experiences = [
    {
      image: img1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      jobTitle: 'Web Developer',
      companyLocation: 'New York, USA'
    },
    {
      image: img2,
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      jobTitle: 'Software Engineer',
      companyLocation: 'San Francisco, USA'
    },
    // Add more experiences as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === experiences.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? experiences.length - 1 : prevSlide - 1));
  };

  return (
    <>
     <h2 className='ex-tit'>experiences</h2>
     <div className="slider-container">
      <button className='button' onClick={prevSlide}>&#8592; Previous</button>
      <Slide
        image={experiences[currentSlide].image}
        description={experiences[currentSlide].description}
        jobTitle={experiences[currentSlide].jobTitle}
        companyLocation={experiences[currentSlide].companyLocation}
      />
      <button className='button' onClick={nextSlide}>Next &#8594;</button>
    </div>
    </>
  );
};

export default ExperienceSlider;