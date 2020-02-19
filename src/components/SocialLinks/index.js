import React from 'react'

import Icons from './Icons'
import links from './content'

import * as s from './styled'

const SocialLinks = () => {
  return (
    <s.SocialLinksWrapper>
      <s.SocialLinksList>
        {links.map((link, i) => {
          const Icon = Icons[link.label]

          return (
            // eslint-disable-next-line react/no-array-index-key
            <s.SocialLinksItem key={i}>
              <s.SocialLinksLink href={link.url} title={link.label} target="_blank" rel="noopener noreferrer">
                <s.IconWrapper>
                  <Icon />
                </s.IconWrapper>
              </s.SocialLinksLink>
            </s.SocialLinksItem>
          )
        })}
      </s.SocialLinksList>
    </s.SocialLinksWrapper>
  )
}

export default SocialLinks
