import React from 'react'
import PropTypes from 'prop-types'

import Profile from '../Profile'
// import { LayoutWrapper, LayoutMain } from './styled'

import * as s from './styled'

import GlobalStyles from '../../styles/global'

const Layout = ({ children }) => {
  return (
    <s.LayoutWrapper>
      <GlobalStyles />
      <aside>
        <Profile />
      </aside>
      <s.LayoutMain>{children}</s.LayoutMain>
    </s.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
