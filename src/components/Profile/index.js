import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Avatar from '../Avatar'

import * as s from './styled'

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `)

  return (
    <s.ProfileWrapper>
      <s.ProfileLink>
        <Avatar />
        <s.ProfileAuthor>
          {title}
          <s.ProfilePosition>{position}</s.ProfilePosition>
        </s.ProfileAuthor>
      </s.ProfileLink>
      <s.ProfileDescription>{description}</s.ProfileDescription>
    </s.ProfileWrapper>
  )
}

export default Profile
