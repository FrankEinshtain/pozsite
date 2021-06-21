import React from 'react'
import { Link } from 'gatsby'
import LogoFull from '../img/LogoFull'

const Logo = () => (
  <Link to={'/'}>
    <div className='logo-container'>
      <div className='logo-img'>
        <LogoFull />
      </div>
    </div>
  </Link>
)

export default Logo
