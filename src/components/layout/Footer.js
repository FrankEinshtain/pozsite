import React from 'react'
import Logo from '../Logo'
import IconUpWork from '../../img/icons/IconUpWork'
import IconFacebook from '../../img/icons/IconFacebook'
import IconLinkedin from '../../img/icons/IconLinkedin'

const Footer = ({ menu, socials }) => (
  <footer className='footer'>
    <div className='container'>
      <div className='inner footer-container'>
        <div className='content'>
          <div className='content-socials'>
            <a href={socials.facebook} className='item'>
              <IconFacebook color='#ffffff' back='transparent' />
            </a>
            <a href={socials.upwork} className='item'>
              <IconUpWork color='#ffffff' back='transparent' />
            </a>
            <a href={socials.linkedin} className='item'>
              <IconLinkedin color='#ffffff' back='transparent' />
            </a>
          </div>
          <div className='content-group'>
            <Logo />
            <div className='content-copyright'>
              Copyright © 2010 - 2021 PozitiFF Company s.r.o. All Rights
              Reserved
            </div>
          </div>
        </div>
        <div className='menu'>
          {menu.map((item, i) => (
            <a key={i} href={item.url}>
              <li
                className={
                  item.url === '#competences' ? 'menu-item bold' : 'menu-item'
                }
              >
                {item.title}
              </li>
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
)
export default Footer
