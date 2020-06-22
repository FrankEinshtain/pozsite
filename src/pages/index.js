import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/Hero'
import WhatWeDo from '../components/WhatWeDo'
import Records from '../components/Records'
import Competences from '../components/Competences'
import References from '../components/References'
import Choose from '../components/Choose'
import Vacancies from '../components/Vacancies'
import Map from '../components/Map'
import ContactUs from '../components/ContactUs'

const IndexPage = () => (
  <Layout>
    <main>
      <Hero />
      <WhatWeDo />
      <Records />
      <Competences />
      <References />
      <Choose />
      <Vacancies />
      <Map />
      <ContactUs />
    </main>
  </Layout>
)

export default IndexPage
