import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as s from './styled'

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "avatar.jpeg" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    `
  )

  return <s.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} alt="Avatar" />
}

export default Avatar
