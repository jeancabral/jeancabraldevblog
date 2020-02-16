import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => (
  <Layout>
    <h1>Sobre</h1>
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

export default AboutPage
