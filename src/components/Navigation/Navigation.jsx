import React, { useState } from 'react';
import './Navigation.scss';
import { FaBars } from "react-icons/fa";
import { Link } from 'react-scroll';


const Navigation = () => {
  const [showLinks, setShowLinks] = useState(false);
   
  return (
    <div className='navigation' id='nav'>
      <div className="nav-container">
        <div className="nav-main">
          <h2>Bruk</h2>
        </div>
        <nav className="nav-list">
          <ul className='list' id={showLinks ? "hidden" : ""}>
            <li>
            <Link
            to="nav"
            spy
            smooth
            offset={-50}
            duration={1000}
            delay={100}
          >
                Home
          </Link>
            </li>
            <li>
            <Link
            to="int"
            spy
            smooth
            offset={-50}
            duration={1000}
            delay={100}
          >
            About
          </Link>
            </li>
            <li>
            <Link
            to="pro"
            spy
            smooth
            offset={-50}
            duration={1000}
            delay={100}
          >
                Project
          </Link>
          </li>
            <li>
            <Link
            to="cont"
            spy
            smooth
            offset={-50}
            duration={1000}
            delay={100}
          >
              Contact
          </Link>
            </li>
          </ul>
          <button onClick={() => setShowLinks(!showLinks)} className="nav-btn">
              <FaBars />
          </button>
        </nav>
      </div>
    </div>
  )
}

export default Navigation