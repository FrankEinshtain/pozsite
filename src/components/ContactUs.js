import React from 'react'

const ContactUs = () => (
  <section id='contact' className='contact'>
    <div className='container'>
      <div className='contact-content'>
        <div className='contact-form'>
          <h3>Contact Us</h3>
          <form>
            <input type='text' placeholder='Name' />
            <input type='email' placeholder='Email' />
            <textarea rows='5' placeholder='Message' />
            <a href='#' className='button hero-button'>
              send message
            </a>
          </form>
        </div>
        <div className='contact-img'></div>
      </div>
    </div>
  </section>
)

export default ContactUs
