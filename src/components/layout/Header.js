import React from 'react'
import { Link } from 'gatsby'
import LogoFull from '../../img/LogoFull'

const Header = ({ menu }) => {
  const handleMenuItemClick = (url) => {
    document.querySelector(url).scrollIntoView(true)
    document.getElementById('toggleInput').click()
  }
  return (
    <header className='header'>
      <div className='header-inner container'>
        <Link to={'/'}>
          <div className='logo-container'>
            <div className='logo-img'>
              <LogoFull />
            </div>
          </div>
        </Link>
        <div id='menuToggle'>
          <input id='toggleInput' type='checkbox' />
          <span></span>
          <span></span>
          <span></span>

          <ul id='menu'>
            {menu.map((item, i) => (
              <li
                key={i}
                className={
                  item.url === '#competences' ? 'menu-item bold' : 'menu-item'
                }
                onClick={(e) => handleMenuItemClick(item.url)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
