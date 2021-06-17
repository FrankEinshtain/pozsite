import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from './Header'
import Footer from './Footer'
import ReactModal from 'react-modal'
import '../../styles/main.scss'

const Layout = ({ children, socials, menu }) => {
  const { modalClass, setModalClass } = useContext(UserContext)
  console.log('modalClass :>> ', modalClass)

  const getModal = () => {
    let modalTitle = ''
    switch (modalClass) {
      case 'presentation':
        modalTitle = 'presentation request'
        break
      case 'cv':
        modalTitle = 'CV send form'
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

    return (
      !!modalClass && (
        <ReactModal
          appElement={document.getElementById('maintag')}
          isOpen={!!modalClass}
          contentLabel={modalTitle}
          overlayClassName='modal-overlay'
          className='modal-content'
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
          <h5 className='modal-title'>{modalTitle}</h5>
          <div className='modal-input modal-name'>
            <label className='modal-label' htmlFor='modalName'>
              name
            </label>
            <input className='input' id='modalName' />
          </div>
          <div className='modal-input modal-email'>
            <label className='modal-label' htmlFor='modalEmail'>
              e-mail
            </label>
            <input className='input' id='modalEmail' />
          </div>
          {modalClass === 'cv' && (
            <div className='modal-input modal-cv-link'>
              <label className='modal-label' htmlFor='modalCv'>
                CV link
              </label>
              <input className='input' id='modalCv' />
            </div>
          )}
          <div className='button-block'>
            <button onClick={handleSend}>send</button>
            <button onClick={handleCancel}>cancel</button>
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
