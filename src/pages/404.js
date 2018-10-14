import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout/layout'

const NotFoundPage = () => (
  <Layout>
		<h1>Ups!</h1>
		<h2>Esta página no existe...</h2>
    <Link to="/">Ir a Home</Link>
  </Layout>
)

export default NotFoundPage
