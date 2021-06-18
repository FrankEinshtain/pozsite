import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from './Header'
import Footer from './Footer'
import ReactModal from 'react-modal'
import IconCloseX from '../../img/icons/IconCloseX'
import '../../styles/main.scss'

const Layout = ({ children, socials, menu }) => {
  const { modalClass, setModalClass } = useContext(UserContext)
  console.log('modalClass :>> ', modalClass)

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

    const handleSend = () => {
      setModalClass(null)
    }
    const handleCancel = () => {
      setModalClass(null)
    }

    const handleAfterOpen = () => {
      const overlay = document.getElementsByClassName('modal-overlay')
      if (modalClass && overlay) {
        overlay[0] && overlay[0].addEventListener('click', handleCancel)
      }
    }

    return (
      <ReactModal
        appElement={document.getElementById('maintag')}
        isOpen={!!modalClass}
        contentLabel={modalTitle}
        className='modal-content'
        overlayClassName='modal-overlay'
        onAfterOpen={handleAfterOpen}
        // eslint-disable-next-line
        shouldCloseOnEsc={true}
        // eslint-disable-next-line
        shouldCloseOnOverlayClick={true}
        // eslint-disable-next-line
        shouldFocusAfterRender={true}
        // eslint-disable-next-line
        ariaHideApp={true}
        // eslint-disable-next-line
        preventScroll={true}
      >
        <div className='modal-header'>
          <h5 className='modal-title'>{modalTitle}</h5>
          <div className='close-btn' onClick={handleCancel}>
            <IconCloseX color='#466d8a' />
          </div>
        </div>
        <div className='modal-input modal-name'>
          <input placeholder='Name' className='input' id='modalName' />
        </div>
        <div className='modal-input modal-email'>
          <input placeholder='Email' className='input' id='modalEmail' />
        </div>
        {modalClass === 'cv' && (
          <div className='modal-input modal-cv-link'>
            <input placeholder='CV link' className='input' id='modalCv' />
          </div>
        )}
        <div className='button-block'>
          <button onClick={handleSend}>send</button>
        </div>
      </ReactModal>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content: 'Pozitiff Team Site',
              },
              { name: 'keywords', content: 'Pozitiff' },
            ]}
          >
            <html lang='en' />
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
