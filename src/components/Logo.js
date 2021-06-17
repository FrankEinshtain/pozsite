import React from 'react'
import logo from '../img/logo.png'
import logoTitle from '../img/logo-text-title.png'
import logoDescription from '../img/logo-text-description.png'
import { Link } from 'gatsby'

const Logo = () => (
  <Link to={'/'}>
    <div className='logo-container'>
      <div className='logo-img'>
        <img src={logo} alt='logo' />
      </div>
      <div className='logo-text'>
        <img src={logoTitle} alt='logo-title' />
        <img src={logoDescription} alt='logo-description' />
      </div>
    </div>
  </Link>
)

export default Logo
