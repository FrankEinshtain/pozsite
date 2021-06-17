import React, { useContext } from 'react'
import ReactModal from 'react-modal'

const Modals = () => {
  const { isModalOpen, setIsModalOpen } = useContext()
  console.log('isModalOpen :>> ', isModalOpen)

  function closeModal() {
    setIsModalOpen(false)
  }
  return (
    <ReactModal isOpen={isModalOpen} contentLabel='Example Modal'>
      <h2>Hello Nasty</h2>
      <div>I am a modal</div>
      <form>
        <input />
        <button>tab navigation</button>
        <button>stays</button>
        <button>inside</button>
        <button>the modal</button>
      </form>
      <button onClick={closeModal}>close</button>
    </ReactModal>
  )
}

export default Modals
