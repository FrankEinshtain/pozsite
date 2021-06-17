import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'

const Choose = ({ data }) => {
  const { setModalClass } = useContext(UserContext)

  const handleClick = () => {
    setModalClass('presentation')
  }
  return (
    <section id='choose' className='choose'>
      <div className='container'>
        <div className='inner'>
          <h3>Why Choose Us</h3>
          <div className='choose-content'>
            <h5>{data.text}</h5>
            <h5 className='bold'>{data.textbold}</h5>
            <button onClick={handleClick} className='button choose-button'>
              {data.buttontext}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Choose
