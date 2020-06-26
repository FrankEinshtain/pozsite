import React from 'react'

const ToggleMenu = ({ menu }) => (
  <div id='menuToggle'>
    <input type='checkbox' />
    <span></span>
    <span></span>
    <span></span>

    <ul id='menu'>
      {menu.map((item, i) => (
        <a key={i} href={item.url}>
          <li className={item.url === '#competences' ? 'bold' : ''}>
            {item.title}
          </li>
        </a>
      ))}
    </ul>
  </div>
)

export default ToggleMenu
