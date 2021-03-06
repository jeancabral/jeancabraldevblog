import React from 'react'
import PropTypes from 'prop-types'

import Sidebar from '../Sidebar'
// import { LayoutWrapper, LayoutMain } from './styled'
import MenuBar from '../MenuBar'

import * as s from './styled'

import GlobalStyles from '../../styles/global'

const Layout = ({ children }) => {
  return (
    <s.LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      <s.LayoutMain>{children}</s.LayoutMain>
      <MenuBar />
    </s.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
