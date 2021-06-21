import React, { useState } from 'react'
import Img from 'gatsby-image/withIEPolyfill'
import { logToDiscord } from '../helpers/index'

const ContactUs = ({ data }) => {
  const { contactimage, buttontext } = data
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userMessage, setUserMessage] = useState('')

  const handleClick = async () => {
    await logToDiscord({
      title: 'Contact Form',
      name: userName,
      email: userEmail,
      link: '',
      message: userMessage,
    })
    setUserName('')
    setUserEmail('')
    setUserMessage('')
  }

  return (
    <section id='contact' className='contact'>
      <div className='container'>
        <div className='inner'>
          <h3>Contact Us</h3>
          <div className='contact-content'>
            <div className='contact-form'>
              <input
                onClick={(e) => e.preventDefault()}
                value={userName}
                onChange={(e) => setUserName(e.currentTarget.value)}
                type='text'
                placeholder='Name'
              />
              <input
                onClick={(e) => e.preventDefault()}
                value={userEmail}
                onChange={(e) => setUserEmail(e.currentTarget.value)}
                type='email'
                placeholder='Email'
              />
              <textarea
                onClick={(e) => e.preventDefault()}
                value={userMessage}
                onChange={(e) => setUserMessage(e.currentTarget.value)}
                rows='5'
                placeholder='Message'
                maxLength='300'
              />
              <button onClick={handleClick} className='btn button hero-button'>
                {buttontext}
              </button>
            </div>
            <Img
              className='contact-img'
              fluid={contactimage.childImageSharp.fluid}
              objectFit='COVER'
              objectPosition='center left'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
