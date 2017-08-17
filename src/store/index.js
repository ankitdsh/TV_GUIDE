/*eslint-disable*/
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import channelList from './channelList'
import channel from './channel'
import favourite from './favourite'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'ASTRO_STORAGE', // The key to store the state on in the storage provider.
  storage: window.localStorage, // or window.sessionStorage or localForage
  // Function that passes the state and returns the state with only the objects you want to store.
  reducer: state => ({
    favourite: state.favourite
    // getRidOfThisModule: state.getRidOfThisModule (No one likes it.)
  })
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
})
// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    channel,
    channelList,
    favourite
  },
  strict: true,
  plugins: [vuexLocalStorage.plugin]
})
