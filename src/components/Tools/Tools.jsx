import React from 'react'
import './Tools.scss'
import css from '../Assets/css.png';
import html from '../Assets/html.png';
import javaScript from '../Assets/javaScript.png';
import react from '../Assets/react.png';
import bootstrap from '../Assets/bootstrap.png';
import redux from '../Assets/redux.png';
import tailwinds from '../Assets/tailwinds.png';
import ruby from '../Assets/ruby.png';
import git from '../Assets/git.png';
import github from '../Assets/github.png';

const Tools = () => {
  return (
    <>
    <div className="tools-container" >
        <h2 className='title'>Tools</h2>
        <div className="tools-list">
           <ul className='list-t'>
            <li className='tol-list'>
              <img src={css} alt="css" />
              <p>Css</p>
            </li>
            <li className='tol-list'>
              <img src={html} alt="html" />
              <p>Html</p>
            </li>
            <li className='tol-list'>
              <img src={javaScript} alt="javaScript" />
              <p>JavaScript</p>
            </li>
            <li className='tol-list'>
              <img src={react} alt="react" />
              <p>React</p>
            </li>
            <li className='tol-list'>
              <img src={redux} alt="redux" />
              <p>Redux</p>
            </li>
            <li className='tol-list'>
              <img src={bootstrap} alt="bootstrap" />
              <p>Bootsrap</p>
            </li>
            <li className='tol-list'>
              <img src={tailwinds} alt="tailwinds" />
              <p>Tailwinds</p>
            </li>
            <li className='tol-list'>
              <img src={ruby} alt="ruby" />
              <p>Ruby</p>
            </li>
            <li className='tol-list'>
              <img src={git} alt="git" />
              <p>Git</p>
            </li>
            <li className='tol-list'>
              <img src={github} alt="github" />
              <p>GitHub</p>
            </li>
           </ul>
        </div>
    </div>
    </>
  )
}

export default Tools