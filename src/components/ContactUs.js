import React from 'react'
import Img from 'gatsby-image/withIEPolyfill'
import Button from '../components/shared/Button'

const ContactUs = ({ data }) => {
  const { contactimage, buttonurl, buttontext } = data
  return (
    <section id='contact' className='contact'>
      <div className='container'>
        <div className='inner'>
          <h3>Contact Us</h3>
          <div className='contact-content'>
            <div className='contact-form'>
              <form>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
                <textarea rows='5' placeholder='Message' />
                <Button
                  url={buttonurl}
                  userClass='hero-button'
                  text={buttontext}
                />
              </form>
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
