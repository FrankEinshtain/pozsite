import React from 'react'
import Button from '../components/shared/Button'

const Choose = ({ data }) => (
  <section id='choose' className='choose'>
    <div className='container'>
      <div className='inner'>
        <h3>Why Choose Us</h3>
        <div className='choose-content'>
          <h5>{data.text}</h5>
          <h5 className='bold'>{data.textbold}</h5>
          <Button
            url={data.buttonurl}
            userClass='choose-button'
            text={data.buttontext}
          />
        </div>
      </div>
    </div>
  </section>
)

export default Choose
