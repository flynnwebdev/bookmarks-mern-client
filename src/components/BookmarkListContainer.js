import React from 'react'
import store from '../store'
import styled from 'styled-components'
import types from 'prop-types'
import { api } from '../api/init'
import BookmarkList from './BookmarkList'

export default class BookmarkListContainer extends React.Component {
  remove = (id) => {
    store.dispatch({ type: 'delete_bookmark', id })
  }

  async componentDidMount() {
    try {
      const bookmarks = await api.get('/bookmarks')
      // store.dispatch({ bookmarks: bookmarks.data })
      // Dispatch a set_bookmarks action to Redux
      store.dispatch({ type: 'set_bookmarks', bookmarks: bookmarks.data })
    }
    catch(error) {
      alert('Can\'t get bookmarks!')
    }
  }

  render() {
    const { bookmarks } = store.getState() || []

    return (
      <BookmarkList bookmarks={bookmarks} remove={this.remove} />
    )
  }
}
