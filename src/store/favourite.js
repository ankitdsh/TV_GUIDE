/*eslint-disable*/
import * as TYPES from './mutation-types'

// State
const state = {
  favourites: {},
  fetching: false,
  fetched: false
}

// Getters
const getters = {
  favourites: state => state.favourites,
  isFavouritesFetching: state => state.fetching,
  isFavouritesFetched: state => state.fetched
}

// Mutations
const mutations = {
  [TYPES.MODIFY_FAVOURITES](state, favourites) {
    state.favourites = favourites
  },
  [TYPES.CLEAR_FAVOURITES](state) {
    state.favourites = {}
  }
}

// Actions
const actions = {
  getFavouriteList({ state }) {
    let favourites = []
    for (let i in state.favourites) {
      favourites.push(state.favourites[i].channelId)
    }
    return favourites
  },
  clearFavouriteList({ commit }) {
    commit(TYPES.MODIFY_FAVOURITES)
  },
  toggleFavourites({ state, commit }, { channel }) {

    let favourites = Object.assign({}, state.favourites) // Array copy  
    let channelId = channel.channelId

    if (favourites[channelId]) {
      delete favourites[channelId]
    } else {
      favourites[channelId] = channel
    }
    commit(TYPES.MODIFY_FAVOURITES, favourites)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
