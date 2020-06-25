import React from 'react'
import RefSlider from './RefSlider'

const References = ({ data }) => (
  <section id='references' className='references'>
    <div className='container'>
      <div className='inner'>
        <h3>References</h3>
        <RefSlider data={data.referencelist} />
        <a className='button references-button' href={data.buttonurl}>
          be our next happy client
        </a>
      </div>
    </div>
  </section>
)

export default References
