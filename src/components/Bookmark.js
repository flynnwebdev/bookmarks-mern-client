import React from 'react'
import styled from 'styled-components'
import types from 'prop-types'

const StyledBookmark = styled.div`
  font-family: sans-serif
  font-size: 1.25em;
  color: plum;
  margin-bottom: 0.5em;
`

export default function Bookmark (props) {
  const { _id, title, url } = props.bookmark
  const { remove } = props
  return (
    <StyledBookmark>
      {title} (<a href={url} target="_blank">Visit</a>)
      { remove && <button onClick={ () => remove(_id) }>Delete!</button> }
    </StyledBookmark>
  )
}

export const BookmarkType = types.shape({
  _id: types.string,
  title: types.string.isRequired,
  url: types.string.isRequired
})

Bookmark.propTypes = {
  bookmark: BookmarkType.isRequired,
  remove: types.func
}
