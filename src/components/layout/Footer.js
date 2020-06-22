import React from 'react'
import Logo from '../Logo'
import facebook from '../../img/icons/facebook.png'
import linkedin from '../../img/icons/linkedin.png'
import behance from '../../img/icons/behance.png'
import instagram from '../../img/icons/instagram.png'

const socialsIcons = [
  {
    icon: facebook,
    url: '#',
  },
  {
    icon: linkedin,
    url: '#',
  },
  {
    icon: behance,
    url: '#',
  },
  {
    icon: instagram,
    url: '#',
  },
]

const footerMenu = [
  {
    name: 'Home',
    url: '#',
  },
  {
    name: 'Main Technical Competences',
    url: '#',
  },
  {
    name: 'Our Approach',
    url: '#',
  },
  {
    name: 'Featured Cases',
    url: '#',
  },
  {
    name: 'Rewievs',
    url: '#',
  },
  {
    name: 'Our Team',
    url: '#',
  },
  {
    name: 'Contact Us',
    url: '#',
  },
]

const footerCopyright =
  'Copyright © 201? - 2019 PozitiFF Company s.r.o. All Rights Reserved'

const Footer = () => (
  <footer className='footer'>
    <div className='container'>
      <div className='inner footer-container'>
        <div className='content'>
          <div className='content-socials'>
            {socialsIcons.map((item, i) => (
              <a key={i} src={item.url} className='content-socials-item'>
                <img src={item.icon} />
              </a>
            ))}
          </div>
          <div className='content-group'>
            <Logo />
            <div className='content-copyright'>{footerCopyright}</div>
          </div>
        </div>
        <div className='menu'>
          {footerMenu.map((item, i) => (
            <a key={i} src={item.url} className='menu-item'>
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
)
export default Footer
