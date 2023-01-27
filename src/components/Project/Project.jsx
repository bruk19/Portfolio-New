import React from 'react'
import './project.scss'
import img1 from '../Assets/crypto.png'
import img2 from '../Assets/movie.png'
import img3 from '../Assets/dankira.png'
import img4 from '../Assets/todo.png'
import bgt from '../Assets/rocket.png'
import car from '../Assets/cars.png'

const Project = () => {
  return (
    <>
      <div className="project-contain" id='pro'>
        <div className="project-list">
            <div className="line">
            <p className='pro-p'>Here are a few of my favorite projects.</p> 
            <hr />
            </div>
            <div className="pro-lists">
                <div className="pro-class">
                    <img src={img1} alt="crypto" />
                    <div className="git">
                      <h2>Crypto-Market</h2>
                      <div className="btn">
                        <button className='btn-list'>
                          <a href="https://deploy-preview-1--ornate-swan-e0dae2.netlify.app/" target="_blank" rel="noopener noreferrer">live</a>
                        </button>
                        <button className='btn-list'>
                          <a href="https://github.com/bruk19/Crypto-Market" target="_blank" rel="noopener noreferrer">gitHub</a>
                        </button>
                      </div>
                    </div> 
                    <p>Crypto-Market is a web application for a cryptocurrencies that provides some information about the 
                        current rank, price.</p>
                    <ul>
                        <li>React</li>
                        <li>Redux</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
                <div className="pro-class">
                    <img src={bgt} alt="car-rental" />
                    <div className="git">
                      <h2>Space-Traveller</h2>
                      <div className="btn">
                        <button className='btn-list'>
                          <a href="https://luminous-sfogliatella-d94d19.netlify.app/" target="_blank" rel="noopener noreferrer">live</a>
                        </button>
                        <button className='btn-list'>
                          <a href="https://github.com/bruk19/Space-travellers-hub" target="_blank" rel="noopener noreferrer">gitHub</a>
                        </button>
                      </div>
                    </div> 
                    <p>Space-x is a web application the is working with the real live data from the SpaceX API.</p>
                    <ul>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Jsx</li>
                    </ul>
                </div>
                <div className="pro-class">
                    <img src={img2} alt="movie" />
                    <div className="git">
                      <h2>Movie</h2>
                      <div className="btn">
                        <button className='btn-list'>
                          <a href="https://chrissiku.github.io/capstone_project_two/dist/" target="_blank" rel="noopener noreferrer">live</a>
                        </button>
                        <button className='btn-list'>
                          <a href="https://github.com/bruk19/capstone_project_two" target="_blank" rel="noopener noreferrer">gitHub</a>
                        </button>
                      </div>
                    </div> 
                    <p>This is a JavaScript project on Cinematic website that is using an external API ( https://www.tvmaze.com/api )</p>
                    <ul>
                        <li>React</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
                <div className="pro-class">
                    <img src={car} alt="buget" />
                    <div className="git">
                      <h2>Car-Rental</h2>
                      <div className="btn">
                        <button className='btn-list'>
                          <a href="https://poetic-snickerdoodle-d2c83e.netlify.app" target="_blank" rel="noopener noreferrer">live</a>
                        </button>
                        <button className='btn-list'>
                          <a href="https://github.com/bruk19/car-rental-app-backend" target="_blank" rel="noopener noreferrer">gitHub</a>
                        </button>
                      </div>
                    </div> 
                    <p>This project is made for the car rentals a website provides a platform for people to easily check available cars,
                       choose favourite cars and rent cars for specific period of time.</p>
                    <ul>
                        <li>React</li>
                        <li>database</li>
                        <li>Rails6</li>
                        <li>PostgreSQL</li>
                    </ul>
                </div>
                <div className="pro-class">
                    <img src={img3} alt="dankira" />
                    <div className="git">
                      <h2>Dankira</h2>
                      <div className="btn">
                        <button className='btn-list'>
                          <a href="https://remarkable-tiramisu-14f3df.netlify.app/" target="_blank" rel="noopener noreferrer">live</a>
                        </button>
                        <button className='btn-list'>
                          <a href="https://github.com/bruk19/Capstone-project" target="_blank" rel="noopener noreferrer">gitHub</a>
                        </button>
                      </div>
                    </div> 
                    <p>This is the first capstone project in Microverse. The goal of the project is to apply the tools we have 
                      learned. Being able to show mastery in all topics is crucial! This webist…</p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
                <div className="pro-class">
                    <img src={img4} alt="todo" />
                    <div className="git">
                      <h2>Todo</h2>
                      <div className="btn">
                        <button className='btn-list'>
                          <a href="https://sprightly-rabanadas-50dedd.netlify.app/" target="_blank" rel="noopener noreferrer">live</a>
                        </button>
                        <button className='btn-list'>
                          <a href="https://github.com/bruk19/todo-list" target="_blank" rel="noopener noreferrer">gitHub</a>
                        </button>
                      </div>
                    </div> 
                    <p>This is a single-page website that allows you to create a to-do list. Users can add, modify and delete items. Also it allows to check their tasks and erase all completed ones. Built with HTML, CSS,…</p>
                    <ul>
                        <li>React</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
           </div>
        </div>
      </div>
    </>
  )
};

export default Project;