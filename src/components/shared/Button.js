import React from 'react'
import { Link } from 'gatsby'

const Button = ({ url, userClass, text }) => {
  return (
    <Link to={url} className={userClass ? `button ${userClass}` : 'button'}>
      {text}
    </Link>
    // <a href={data.buttonurl} className='button hero-button'>
    //   LET’S TALK
    // </a>
  )
}

export default Button
