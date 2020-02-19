import React from 'react'
import Profile from '../Profile'
import SocialLinks from '../SocialLinks'
import * as s from './styled'

const Sidebar = () => {
  return (
    <s.SidebarWrapper>
      <Profile />
      <SocialLinks />
    </s.SidebarWrapper>
  )
}

export default Sidebar
