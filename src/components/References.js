import React from 'react'
import RefSlider from './RefSlider'
import Button from '../components/shared/Button'

const References = ({ data }) => (
  <section id='references' className='references'>
    <div className='container'>
      <div className='inner'>
        <h3>References</h3>
        <RefSlider data={data.referencelist} />
        <Button
          url={data.buttonurl}
          userClass='references-button'
          text={data.buttontext}
        />
        {/* <a className='button references-button' href={data.buttonurl}>
          be our next happy client
        </a> */}
      </div>
    </div>
  </section>
)

export default References
