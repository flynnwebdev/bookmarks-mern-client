import React from 'react'
import store from '../store'
import styled from 'styled-components'
import types from 'prop-types'
import { api } from '../api/init'
import BookmarkList from './BookmarkList'

export default class BookmarkListContainer extends React.Component {
  fetch = async () => {
    api.get('/bookmarks').then((result) => {
      app.setState({ bookmarks: result.data })
    })
  }

  remove = (id) => {
    const index = app.state.bookmarks.findIndex(bookmark => bookmark._id === action.id)
    if (index >= 0) {
      // TODO: Remove from API
      const newBookmarks = [...app.state.bookmarks]
      newBookmarks.splice(index, 1)
      app.setState({ bookmarks: newBookmarks })
    }
  }

  render() {
    if (app.state.bookmarks.length === 0) {
      this.fetch()
      return <h2>Loading ...</h2>
    } else {
      return (
        <BookmarkList bookmarks={app.state.bookmarks} remove={this.remove} />
      )
    }
  }
}
