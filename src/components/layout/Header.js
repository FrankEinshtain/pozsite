import React from 'react'
import { Link } from 'gatsby'
import LogoFull from '../../img/LogoFull'
import ToggleMenu from '../ToggleMenu'

const Header = ({ menu }) => (
  <header>
    <div className='container'>
      <div className='inner'>
        <div className='header-container'>
          <Link to={'/'}>
            <div className='logo-container'>
              <div className='logo-img'>
                <LogoFull />
              </div>
            </div>
          </Link>
          <ToggleMenu menu={menu} />
        </div>
      </div>
    </div>
  </header>
)

export default Header
