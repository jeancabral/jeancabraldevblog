import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

import PostItem from '../components/PostItem'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about/"
      category="Misc"
      date="30 de Julho de 2019"
      timeToRead="5"
      title="Id qui ex sint laborum consectetur do commodo."
      description="Voluptate laboris reprehenderit ipsum labore laboris officia ipsum sint culpa magna qui commodo consequat. Sint sint Lorem voluptate sint ipsum et nostrud Lorem proident aute sit officia incididunt anim. Pariatur et culpa occaecat consectetur esse Lorem laborum aute anim qui. Qui qui non excepteur pariatur dolor ipsum duis sit commodo."
    />
  </Layout>
)

export default IndexPage
