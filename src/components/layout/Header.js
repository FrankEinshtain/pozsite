import React from 'react'
import Logo from '../Logo'
import ToggleMenu from '../ToggleMenu'

const Header = () => (
  <header>
    <div className='container'>
      <div className='inner'>
        <div className='header-container'>
          <Logo />
          <ToggleMenu />
        </div>
      </div>
    </div>
  </header>
)

export default Header
