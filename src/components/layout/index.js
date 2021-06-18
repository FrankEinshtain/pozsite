import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../context/userContext'
import Helmet from 'react-helmet'
import socialImage from '../../img/social_preview.png'
import { StaticQuery, graphql } from 'gatsby'
import Header from './Header'
import Footer from './Footer'
import ReactModal from 'react-modal'
import IconCloseX from '../../img/icons/IconCloseX'
import { logToDiscord } from '../../helpers'
import '../../styles/main.scss'

const Layout = ({ children, socials, menu }) => {
  const { modalClass, setModalClass } = useContext(UserContext)
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userLink, setUserLink] = useState('')
  const [isSendPressed, setIsSendPressed] = useState(false)

  useEffect(() => {
    ;(async () => {
      if (isSendPressed) {
        console.log('logToDiscord in :>> ', {
          name: userName,
          email: userEmail,
          link: userLink,
        })
        const discordRes = await logToDiscord({
          name: userName,
          email: userEmail,
          link: userLink,
        })
        console.log('logToDiscord response :>> ', discordRes)
      }
    })()
  }, [userName, userEmail, userLink, isSendPressed])

  const getModal = () => {
    let modalTitle = ''
    switch (modalClass) {
      case 'presentation':
        modalTitle = 'REQUEST PRESENTATION'
        break
      case 'cv':
        modalTitle = 'SEND YOUR CV'
        break
      default:
        break
    }

    const handleCancel = (e) => {
      const allowedClosers = [
        'ReactModal__Overlay ReactModal__Overlay--after-open modal-overlay',
        'modal-send-btn',
        'close-btn',
      ]
      if (
        e.target.className &&
        (allowedClosers.includes(e.target.className) ||
          e.target.nodeName === 'svg' ||
          typeof e.target.className === 'object')
      ) {
        if (e.target.className === 'modal-send-btn') {
          setIsSendPressed(true)
        }
        setModalClass(null)
      }
    }
    const isBrowser =
      typeof window !== 'undefined' && typeof document !== 'undefined'
    console.log('isBrowser :>> ', isBrowser)
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
          <div className='modal-header'>
            <h5 className='modal-title'>{modalTitle}</h5>
            <div className='close-btn' onClick={handleCancel}>
              <IconCloseX color='#466d8a' />
            </div>
          </div>
          <div className='modal-input modal-name'>
            <input
              type='text'
              onClick={(e) => e.preventDefault()}
              onChange={(e) => {
                setUserName(e.currentTarget.value)
              }}
              placeholder='Name'
              className='input input-name'
              id='modalName'
            />
          </div>
          <div className='modal-input modal-email'>
            <input
              type='email'
              onClick={(e) => e.preventDefault()}
              onChange={(e) => {
                setUserEmail(e.currentTarget.value)
              }}
              placeholder='Email'
              className='input input-email'
              id='modalEmail'
            />
          </div>
          {modalClass === 'cv' && (
            <div className='modal-input modal-cv-link'>
              <input
                type='text'
                onClick={(e) => e.preventDefault()}
                onChange={(e) => {
                  setUserLink(e.currentTarget.value)
                }}
                placeholder='CV link'
                className='input input-link'
                id='modalCv'
              />
            </div>
          )}
          <div className='button-block'>
            <button type='button' className='modal-send-btn'>
              send
            </button>
          </div>
        </ReactModal>
      )
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={(data) => (
        <>
          <Helmet>
            <html lang='en' />

            {/* General tags */}
            <title>{data.site.siteMetadata.title}</title>
            <meta
              name='description'
              content={data.site.siteMetadata.description}
            />

            {/* OpenGraph tags */}
            <meta name='og:title' content={data.site.siteMetadata.title} />
            <meta
              name='og:description'
              content={data.site.siteMetadata.description}
            />
            <meta name='image' content={socialImage} />
            <meta name='og:image' content={socialImage} />
            <meta name='og:type' content='website' />

            {/* Twitter Card tags */}
            <meta name='twitter:title' content={data.site.siteMetadata.title} />
            <meta
              name='twitter:description'
              content={data.site.siteMetadata.description}
            />
            <meta name='twitter:image' content={socialImage} />
            <meta name='twitter:card' content='summary' />
            <meta name='twitter:creator' content='frank.einshtain@gmail.com' />
          </Helmet>
          {getModal()}
          <Header menu={menu} />
          {children}
          <Footer menu={menu} socials={socials} />
        </>
      )}
    />
  )
}

export default Layout
