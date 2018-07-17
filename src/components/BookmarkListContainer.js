import React from 'react'
import store from '../store'
import styled from 'styled-components'
import types from 'prop-types'
import { api } from '../api/init'
import BookmarkList from './BookmarkList'

export default class BookmarkListContainer extends React.Component {
  static fetchBookmarks = async () => {
    const bookmarks = await api.get('/bookmarks')
    store.dispatch({ type: 'set_bookmarks', bookmarks: bookmarks.data })
  }

  remove = (id) => {
    store.dispatch({ type: 'delete_bookmark', id })
  }

  render() {
    if (store.getState() && store.getState().bookmarks) {
      return (
        <BookmarkList bookmarks={store.getState().bookmarks} remove={this.remove} />
      )
    } else {
      return <h2>Loading ...</h2>
    }
  }
}
