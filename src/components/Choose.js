import React from 'react'

const Choose = ({ data }) => (
  <section id='choose' className='choose'>
    <div className='container'>
      <div className='inner'>
        <h3>Why Choose Us</h3>
        <div className='choose-content'>
          <h5>{data.text}</h5>
          <h5 className='bold'>{data.textbold}</h5>
          <a href={data.buttonurl} className='button choose-button'>
            Request our presentation
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Choose
