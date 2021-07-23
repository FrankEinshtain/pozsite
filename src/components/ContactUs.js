import React, { useState } from 'react'
import Img from 'gatsby-image/withIEPolyfill'
import { validateDiscordMessage, logToDiscord } from '../helpers/index'
import ModalFickus from '../img/ModalFickus'

const ContactUs = ({ data }) => {
  const { contactimage, buttontext } = data
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userMessage, setUserMessage] = useState('')
  const [isMessageSent, setIsMessageSent] = useState(false)

  const handleSendClick = async (e) => {
    e.preventDefault()
    const inputArr = ['contactName', 'contactEmail', 'contactMessage']
    inputArr.forEach((item) => {
      if (document.getElementById(item)) {
        document.getElementById(item).style.backgroundColor = '#ffffff'
      }
    })

    const validatorResponse = validateDiscordMessage(
      {
        title: 'Contact Form',
        name: userName,
        email: userEmail,
        message: userMessage,
        link: '',
      },
      'contact'
    )

    if (validatorResponse.isValid) {
      const discordResponse = await logToDiscord({
        title: 'Contact Form',
        name: userName,
        email: userEmail,
        link: '',
        message: userMessage,
      })
      console.log('contact form discordResponse :>> ', discordResponse)
      setUserName('')
      setUserEmail('')
      setUserMessage('')
      setIsMessageSent(true)
    } else {
      if (validatorResponse.errors) {
        validatorResponse.errors.forEach((name) => {
          if (document.getElementById(name)) {
            document.getElementById(name).style.backgroundColor =
              'rgb(253 234 234)'
          }
        })
      }
    }
  }

  return (
    <section id='contact' className='contact'>
      <div className='container'>
        <div className='inner'>
          <h3>Contact Us</h3>
          <div className='content'>
            {isMessageSent ? (
              <div className='contact-thank-you'>
                <h3>Thank you!</h3>
                <p>We will contact you soon!</p>
                <ModalFickus />
              </div>
            ) : (
              <form className='contact-form'>
                <input
                  onClick={(e) => e.preventDefault()}
                  value={userName}
                  onChange={(e) => setUserName(e.currentTarget.value)}
                  type='text'
                  placeholder='Name'
                  id='contactName'
                />
                <input
                  onClick={(e) => e.preventDefault()}
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.currentTarget.value)}
                  type='email'
                  placeholder='Email'
                  id='contactEmail'
                />
                <textarea
                  onClick={(e) => e.preventDefault()}
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.currentTarget.value)}
                  rows='5'
                  placeholder='Message'
                  id='contactMessage'
                  maxLength='300'
                />
                <button
                  onClick={handleSendClick}
                  type='button'
                  className='btn button contact-send-btn'
                >
                  {buttontext}
                </button>
              </form>
            )}
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
