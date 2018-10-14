import React from 'react'

import Layout from '../components/layout/layout'
import Hero from '../components/content/hero'
import Bio from '../components/content/bio'
import Portfolio from '../components/content/portfolio'
import Contact from '../components/content/contact'

const IndexPage = () => (
  <Layout>
    <Hero />
		<Bio />
		<Portfolio />
		<Contact />
  </Layout>
)

export default IndexPage
