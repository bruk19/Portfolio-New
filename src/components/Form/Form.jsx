import React, { useState } from 'react';
import './Form.scss';

const Form = () => {
  const defaultFormFields = {
    name: '',
    email: '',
    message: '',
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    name,
    email,
    message,
  } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };


    const handleSubmit = (e) => {
      e.preventDefault();
      resetFormFields();
      const contact = {name, email, message};
      
      fetch('https://formspree.io/f/xzbokgee', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(contact)
      }).then(() => {
        console.log('new message added')
      })
    }
  return (
    <>
      <form onSubmit={handleSubmit} action="https://formspree.io/f/xzbokgee" method="post">
        <div className="form-group">
          <label htmlFor="name">
            Your Name
            <input type="text" 
            name='name' 
            onChange={handleChange} value={name}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your email
            <input type="text" 
            name='email' 
            value={email} 
            onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-groups">
          <label htmlFor="email">
            Your message
            <input type="text" 
            name='message' 
            value={message} 
            onChange={handleChange}
            />
          </label>
        </div>
        <button type='submit'>Send</button>
      </form>
    </>
  )
}

export default Form