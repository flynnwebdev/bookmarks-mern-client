import React from 'react'
import styled from 'styled-components'
import types from 'prop-types'
import { api } from '../api/init'
import BookmarkList from './BookmarkList'
import { store } from '../store'

export const fetchBookmarks = () => {
  api.get('/bookmarks').then((result) => {
    store.setState({ bookmarks: result.data })
  })
}

const removeBookmark = (id) => {
  const index = store.state.bookmarks.findIndex(bookmark => bookmark._id === id)
  if (index >= 0) {
    // TODO: Remove from API
    const newBookmarks = [...store.state.bookmarks]
    newBookmarks.splice(index, 1)
    store.setState({ bookmarks: newBookmarks })
  }
}

export const BookmarkListContainer = () => {
  if (store.state.bookmarks && store.state.bookmarks.length > 0) {
    return (
      <BookmarkList bookmarks={store.state.bookmarks} remove={removeBookmark} />
    )
  } else {
    return <h2>Loading ...</h2>
  }
}
