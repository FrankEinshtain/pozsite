import React from 'react'

const headerMenu = [
  {
    name: 'what we do',
    url: '#what-we-do',
  },
  {
    name: 'main technical competences',
    url: '#competences',
  },
  {
    name: 'references',
    url: '#references',
  },
  {
    name: 'why us',
    url: '#choose',
  },
  {
    name: 'vacancies',
    url: '#vacancies',
  },
  {
    name: 'contact',
    url: '#contact',
  },
]

const ToggleMenu = () => (
  <div id='menuToggle'>
    <input type='checkbox' />
    <span></span>
    <span></span>
    <span></span>

    <ul id='menu'>
      {headerMenu.map((item, i) => (
        <a key={i} href={item.url}>
          <li
            className={item.name === 'main technical competences' ? 'bold' : ''}
          >
            {item.name}
          </li>
        </a>
      ))}
    </ul>
  </div>
)

export default ToggleMenu
