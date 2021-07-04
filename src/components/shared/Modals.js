import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../context/userContext'
import ReactModal from 'react-modal'
import { validateDiscordMessage, logToDiscord } from '../../helpers'
import IconCloseX from '../../img/icons/IconCloseX'
import modalPresImg from '../../img/modal-pres-img.png'
import modalCvImg from '../../img/modal-cv-img.png'

const MainModal = () => {
  const { modalClass, setModalClass } = useContext(UserContext)
  const [modalTitle, setModalTitle] = useState('')
  const [messageTitle, setMessageTitle] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [link, setLink] = useState('')
  const [isSendPressed, setIsSendPressed] = useState(false)
  const [isMessageSent, setIsMessageSent] = useState(false)
  const [thankYouMessage, setThankYouMessage] = useState('')
  const isBrowser =
    typeof window !== 'undefined' && typeof document !== 'undefined'

  useEffect(() => {
    if (modalClass) {
      switch (modalClass) {
        case 'cv':
          setModalTitle('Send your CV')
          setMessageTitle('CV')
          setThankYouMessage('We will contact you soon!')
          break
        case 'presentation':
          setModalTitle('Request Presentation')
          setMessageTitle('Presentation Request')
          setThankYouMessage('We will send our presentation to you soon!')
          break
        default:
          break
      }
    }
  }, [modalClass])

  useEffect(() => {
    ;(async () => {
      if (isBrowser) {
        if (isSendPressed) {
          const discordResponse = await logToDiscord({
            title: messageTitle,
            name: name,
            email: email,
            link: link,
            message: '',
          })
          console.log('modal discordResponse :>> ', discordResponse)
          setIsMessageSent(true)
          setName('')
          setEmail('')
          setLink('')
        }
      }
    })()
  }, [isSendPressed])

  const handleCancel = (e) => {
    const allowedClosers = [
      'ReactModal__Overlay ReactModal__Overlay--after-open modal-overlay',
      'modal-send-btn',
      'modal-thank-btn',
      'close-btn',
    ]
    if (
      e.target.className &&
      (allowedClosers.includes(e.target.className) ||
        e.target.nodeName === 'svg' ||
        typeof e.target.className === 'object')
    ) {
      if (e.target.className === 'modal-thank-btn') {
        setIsSendPressed(false)
        setModalClass(null)
        setName('')
        setEmail('')
        setLink('')
      }

      if (e.target.className === 'modal-send-btn') {
        const inputArr = ['modalName', 'modalEmail', 'modalCv']
        inputArr.forEach((item) => {
          if (document.getElementById(item)) {
            document.getElementById(item).style.backgroundColor = '#ffffff'
          }
        })

        const validatorResponse = validateDiscordMessage(
          {
            title: messageTitle,
            name: document.getElementById('modalName').value,
            email: document.getElementById('modalEmail').value,
            link:
              modalClass === 'cv'
                ? document.getElementById('modalCv').value
                : '',
            message: '',
          },
          modalClass
        )

        if (validatorResponse.isValid) {
          setIsSendPressed(true)
        } else {
          if (validatorResponse.errors) {
            validatorResponse.errors.forEach((name) => {
              if (document.getElementById(name)) {
                document.getElementById(name).style.backgroundColor =
                  'rgb(253 234 234)'
              }
            })
          }
        }
      } else {
        setModalClass(null)
        setName('')
        setEmail('')
        setLink('')
      }
    }
  }

  const handleAfterOpen = () => {
    if (isBrowser) {
      const overlay = document.getElementsByClassName('modal-overlay')
      if (modalClass && overlay.length) {
        overlay[0] && overlay[0].addEventListener('click', handleCancel)
      }
      return () => {
        const overlay = document.getElementsByClassName('modal-overlay')
        if (modalClass && overlay) {
          overlay[0] && overlay[0].removeEventListener('click', handleCancel)
        }
      }
    }
  }

  const handleThankOkClick = () => {
    setModalClass(null)
    setIsMessageSent(false)
    setIsSendPressed(false)
  }

  return (
    isBrowser && (
      <ReactModal
        appElement={document.getElementById('maintag')}
        isOpen={!!modalClass}
        contentLabel={modalTitle}
        className='modal-content'
        overlayClassName='modal-overlay'
        onAfterOpen={handleAfterOpen}
        ariaHideApp
        preventScroll
      >
        {isMessageSent ? (
          <div className='thank-placeholder'>
            <h3>Thank you!</h3>
            <p>{thankYouMessage}</p>
            <button
              onClick={handleThankOkClick}
              type='button'
              className='modal-thank-btn button'
            >
              ok
            </button>
          </div>
        ) : (
          <>
            <div className='inner'>
              <div className='modal-header'>
                <h5 className='modal-title'>{modalTitle}</h5>
              </div>
              <div className='modal-input modal-name'>
                <input
                  value={name}
                  type='text'
                  onClick={(e) => e.preventDefault()}
                  onChange={(e) => {
                    setName(e.currentTarget.value)
                  }}
                  placeholder='Name'
                  className='input input-name'
                  id='modalName'
                />
              </div>
              <div className='modal-input modal-email'>
                <input
                  value={email}
                  type='email'
                  onClick={(e) => e.preventDefault()}
                  onChange={(e) => {
                    setEmail(e.currentTarget.value)
                  }}
                  placeholder='Email'
                  className='input input-email'
                  id='modalEmail'
                />
              </div>
              {modalClass === 'cv' && (
                <div className='modal-input modal-cv-link'>
                  <input
                    value={link}
                    type='url'
                    onClick={(e) => e.preventDefault()}
                    onChange={(e) => {
                      setLink(e.currentTarget.value)
                    }}
                    placeholder='CV link'
                    className='input input-link'
                    id='modalCv'
                  />
                </div>
              )}
              <button type='button' className='modal-send-btn'>
                send
              </button>
            </div>
            <div className='modal-img-bottom'>
              <img
                src={modalClass === 'cv' ? modalCvImg : modalPresImg}
                alt='image'
              />
            </div>
            <div className='close-btn' onClick={handleCancel}>
              <IconCloseX color='#466d8a' />
            </div>
          </>
        )}
      </ReactModal>
    )
  )
}

export default MainModal
