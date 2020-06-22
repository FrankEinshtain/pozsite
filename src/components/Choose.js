import React from 'react'

const chooseText =
  'Some agencies will try to sell you their ready-made solutions and/or technologies they are most comfortable using – not what you really need. What makes us different is that we are open to looking beyond what we know to find the optimal solution for every customer.'

const chooseTextBold =
  'Even if that means creating something completely custom-made.'

const Choose = () => (
  <section id='choose' className='choose'>
    <div className='container'>
      <div className='inner'>
        <h3>Why Choose Us</h3>
        <div className='choose-content'>
          <h5>{chooseText}</h5>
          <h5 className='bold'>{chooseTextBold}</h5>
          <a href='#' className='button choose-button'>
            Request our presentation
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Choose
