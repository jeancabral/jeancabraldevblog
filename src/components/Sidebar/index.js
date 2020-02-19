import React from 'react'
import Profile from '../Profile'
import SocialLinks from '../SocialLinks'
import MenuLinks from '../MenuLinks'

import * as s from './styled'

const Sidebar = () => {
  return (
    <s.SidebarWrapper>
      <Profile />
      <SocialLinks />
      <MenuLinks />
    </s.SidebarWrapper>
  )
}

export default Sidebar
