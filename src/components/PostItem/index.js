import React from 'react'

import * as s from './styled'

const PostItem = () => (
  <s.PostItemLink to="/slug/">
    <s.PostItemWrapper>
      <s.PostItemTag background="#47650b">Tag</s.PostItemTag>
      <s.PostItemInfo>
        <s.PostItemDate>19 de Feveiro de 2019 • 4 min de leitura</s.PostItemDate>
        <s.PostItemTitle>Ex proident eu ipsum fugiat dolore amet eiusmod est.</s.PostItemTitle>
        <s.PostItemDescription>
          Ipsum sunt consectetur sint cillum id ea laborum magna minim dolor. Non cillum et culpa sunt excepteur est
          officia ea aute et in. Aute velit adipisicing est eiusmod enim amet. Ipsum enim deserunt deserunt eu consequat
          amet id ex aute enim exercitation quis aliqua sit. Deserunt dolor et Lorem nostrud cillum eiusmod sunt tempor
          amet nisi culpa.
        </s.PostItemDescription>
      </s.PostItemInfo>
    </s.PostItemWrapper>
  </s.PostItemLink>
)

export default PostItem
