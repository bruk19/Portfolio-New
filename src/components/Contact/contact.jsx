import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import Form from '../Form/Form';
import Media from '../Media/Media';
import './contact.scss'

const Contact = () => {
  return (
    <>
    <div className="contact-container" id='cont'>
      <div className="contact-tit">
        <p>get in touch</p>
        <h2>CONTACT</h2>
      </div>
        <div className="contact-menu">
            <div className="left">
              <div className="contacts">
                <FaPhoneAlt />
                <p>+251913020845</p>
              </div>
              <div className="contacts">
                <FaEnvelope />
                <p>brukteshome21@gmail.com</p>
              </div>
              <div className="contacts">
                <FaMapMarkerAlt />
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>
            <div className="lineL">
            </div>
            <div className="right">
              <Form />
            </div>
        </div>
        <Media />
    </div>
    </>
  )
}

export default Contact;