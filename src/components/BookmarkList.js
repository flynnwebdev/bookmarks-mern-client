import React from 'react'
import styled from 'styled-components'
import types from 'prop-types'
import Bookmark, { BookmarkType } from './Bookmark'

export default class BookmarkList extends React.Component {
  static propTypes = {
    bookmarks: types.arrayOf(BookmarkType).isRequired,
    remove: types.func
  }

  render() {
      return (
        <div>
          <h1>Bookmarks</h1>
          <ul>
          {
            this.props.bookmarks.map(
              bookmark => <Bookmark key={bookmark._id} bookmark={bookmark} remove={this.props.remove} />
            )
          }
          </ul>
        </div>
      )
  }
}
