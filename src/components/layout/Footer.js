import React from 'react'
import Logo from '../Logo'
import Img from 'gatsby-image'

const Footer = ({ menu, socials }) => (
  <footer className='footer'>
    <div className='container'>
      <div className='inner footer-container'>
        <div className='content'>
          <div className='content-socials'>
            {socials.map((item, i) => (
              <a key={i} href={item.url} className='item'>
                <Img
                  className='item-icon'
                  fluid={item.icon.childImageSharp.fluid}
                />
              </a>
            ))}
          </div>
          <div className='content-group'>
            <Logo />
            <div className='content-copyright'>
              Copyright © 2010 - 2020 PozitiFF Company s.r.o. All Rights
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
