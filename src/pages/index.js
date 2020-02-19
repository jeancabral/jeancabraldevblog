import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <Link activeStyle={{ color: 'red' }} to="/">
      Home
    </Link>
    <Link activeStyle={{ color: 'red' }} to="/About">
      About
    </Link>
    <Link activeStyle={{ color: 'red' }} to="/Portfolio">
      Portfolio
    </Link>
  </Layout>
)

export default IndexPage
