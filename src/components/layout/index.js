import React from 'react'
import Seo from '../Seo'
import { StaticQuery, graphql } from 'gatsby'
import Header from './Header'
import Footer from './Footer'
import MainModal from '../shared/Modals'
import '../../styles/main.scss'

const Layout = ({ children, socials, menu }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
              author
            }
          }
        }
      `}
      render={(data) => (
        <>
          <Seo
            description={data.site.siteMetadata.description}
            title={data.site.siteMetadata.title}
          />
          <MainModal />
          <Header menu={menu} />
          {children}
          <Footer menu={menu} socials={socials} />
        </>
      )}
    />
  )
}

export default Layout
