import React from 'react'
import PropTypes from 'prop-types'

import * as s from './styled'

const PostItem = ({ slug, background, category, date, timeToRead, title, description }) => (
  <s.PostItemLink to={slug}>
    <s.PostItemWrapper>
      <s.PostItemTag background={background}>{category}</s.PostItemTag>
      <s.PostItemInfo>
        <s.PostItemDate>
          {date} • {timeToRead} min de leitura
        </s.PostItemDate>
        <s.PostItemTitle>{title}</s.PostItemTitle>
        <s.PostItemDescription>{description}</s.PostItemDescription>
      </s.PostItemInfo>
    </s.PostItemWrapper>
  </s.PostItemLink>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem
