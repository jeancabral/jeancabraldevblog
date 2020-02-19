import React from 'react'

import links from './content'

import * as s from './styled'

const MenuLinks = () => {
  return (
    <s.MenuLinksWrapper>
      <s.MenuLinksList>
        {links.map((link, i) => (
          <s.MenuLinksItem key={i}>
            <s.MenuLinksLink to={link.url} activeClassName="active">
              {link.label}
            </s.MenuLinksLink>
          </s.MenuLinksItem>
        ))}
      </s.MenuLinksList>
    </s.MenuLinksWrapper>
  )
}

export default MenuLinks
