import React from 'react'
import RefSlider from './RefSlider'
import Button from '../components/shared/Button'

const References = ({ data }) => {
  // console.log('ref item data :>> ', data)
  return (
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
        </div>
      </div>
    </section>
  )
}

export default References
