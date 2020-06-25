import React from 'react'
import VacSlider from './VacSlider'

const Vacancies = ({ data }) => {
  return (
    <section id='vacancies' className='vacancies'>
      <div className='container'>
        <div className='inner'>
          <h3>Vacancies</h3>
          <div className='content'>
            <div className='content-advantages'>
              <h4>
                Join our <span className='green'>team</span>
              </h4>
              <ul>
                {data.advantages.map((item, i) => (
                  <li key={i} className='content-advantages-item'>
                    {item.item}
                  </li>
                ))}
              </ul>
            </div>
            <div className='content-slider'>
              <VacSlider data={data.vacancylist} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vacancies
