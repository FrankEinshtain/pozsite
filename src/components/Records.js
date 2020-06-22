import React from 'react'

const recordsList = [
  {
    count: '>100',
    description: 'Team members',
  },
  {
    count: '7',
    description: 'Countries',
  },
  {
    count: '45',
    description: 'Ventures Launched',
  },
  {
    count: '6',
    description: 'Years in Business',
  },
]

const Records = () => (
  <section className='records'>
    <div className='container'>
      <div className='inner'>
        <div className='records-list'>
          {recordsList.map((item, i) => (
            <div key={i} className='records-item'>
              <div className='records-item-count'>{item.count}</div>
              <div className='records-item-description'>{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Records
