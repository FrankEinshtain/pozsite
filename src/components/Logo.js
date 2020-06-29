import React from 'react'
import logo from '../img/logo.png'
import { Link } from 'gatsby'

const Logo = () => (
  <Link to={'/'}>
    <div className='logo-container'>
      <div className='logo-img'>
        <img src={logo} alt='logo' />
      </div>
      <div className='logo-text'>
        <h2>pozitiff</h2>
        <p>information technologies</p>
      </div>
    </div>
  </Link>
)

export default Logo
