import React from 'react'
import {Form, useNavigate } from 'react-router-dom'
import './Contact.css'
import './ContactMedia.css'

const Contact = () => {
  return (
    <div className='form-container'>
      <header className='form-header'>
        <h1>Contact us</h1>
        <p>Get in touch with us.We are always here to help you.</p>
      </header>
      <Form method='POST' action='/contact' className='main-form'>
        <div className='form-username'>
          <label>Full Name</label>
          <input autoComplete='off' required type='text' name='username' placeholder='Enter Full Name'/>
        </div>
        <div className='form-email'>
          <label>Email Address</label>
          <input autoComplete='off' required type='email' name='email' placeholder='Enter your email'/>
        </div>
        <div className='form-message'>
          <label>Message</label>
          <textarea type='text' name='message' rows={5} placeholder='We are always here to help you'/>
        </div>
        <button className='form-submit-btn'>Send Message</button>

      </Form>
    </div>
  )
}

export default Contact


export const contactData = async ({request}) =>{
  const res = await request.formData();
  const data = Object.fromEntries(res);
  console.log(data);
  return null;
}