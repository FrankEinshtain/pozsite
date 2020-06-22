import React from 'react'
import VacSlider from './VacSlider'

const advantageItems = [
  'відповідне обладнання',
  'соц.пакет',
  'плюшки',
  'навчання',
  'гнучкий графік',
  'кофе',
  'конфеты',
  'слонята',
]

const Vacancies = () => (
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
              {advantageItems.map((item, i) => (
                <li key={i} className='content-advantages-item'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className='content-slider'>
            <VacSlider />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Vacancies
