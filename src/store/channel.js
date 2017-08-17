/*eslint-disable*/

import * as TYPES from './mutation-types'
import { PATH, API_ENDPOINTS } from './config'

/*
let channel = {
  channelId: 1,
  channelTitle: "HBO",
  channelStbNumber: 411,
  details: {
    channelId: 1,
    siChannelId: "998",
    channelTitle: "HBO",
    channelDescription: "From the biggest blockbusters of them all, to the most unforgettable originals, HBO is devoted to delivering unbeatable home entertainment with exclusive first-run rights from Warner Bros, Universal, Columbia, Paramount and Dreamworks. The channel is commercial free within a movie, offering uninterrupted viewing pleasure.",
    channelLanguage: "International",
    channelColor1: null,
    channelColor2: null,
    channelColor3: null,
    channelCategory: "Movies",
    channelStbNumber: "411",
    channelHD: !1,
    hdSimulcastChannel: 143,
    channelStartDate: null,
    channelEndDate: null,
    channelExtRef: [{
      system: "Logo",
      subSystem: "Neg_600x370 ",
      value: "https://astrocontent.s3.amazonaws.com/Images/ChannelLogo/Neg/411.png"
    }, {
      system: "Logo",
      subSystem: "Pos_60x37 ",
      value: "https://astrocontent.s3.amazonaws.com/Images/ChannelLogo/Pos/411_60.png"
    }, {
      system: "Logo",
      subSystem: "Pos_51x31 ",
      value: "https://astrocontent.s3.amazonaws.com/Images/ChannelLogo/Pos/411_51.png"
    }, {
      system: "Whats-on",
      subSystem: "service_id",
      value: "1"
    }, {
      system: "Whats-on",
      subSystem: "service_key",
      value: "1"
    }, {
      system: "nds",
      subSystem: "taExclusion",
      value: "false"
    }, {
      system: "Whats-on",
      subSystem: "channelPage",
      value: "http://whatson.astro.com.my/channels/hbo/1/?cat=movies&stb=411"
    }],
    linearOttMapping: [{
      platform: "Set Top Box"
    }]
  }
}*/

// Initial State
const state = {
  channelDetails: null,
  channelDetailsList: null,
  fetching: false,
  fetched: false,
}

// // getters
const getters = {
  channelDetails: state => state.channelDetails,
  ischannelDetailsFetching: state => state.fetching,
  ischannelDetailsFetched: state => state.fetched
}

// // Mutations
const mutations = {

  [TYPES.FETCHING_CHANNEL_DETAILS](state) {
    state.fetching = true
    state.fetched = false
  },
  [TYPES.FETCHING_CHANNEL_DETAILS_SUCCESS](state, channelDetails) {
    state.fetching = false
    state.fetched = true
    state.channelDetails = channelDetails
  },
  [TYPES.FETCHING_CHANNEL_DETAILS_ERROR](state, errorMessage) {
    state.fetching = false
    state.fetched = false
    state.errorMessage = errorMessage
  },
  [TYPES.CLEAR_CHANNEL_DETAILS](state) {
    state.fetching = false
    state.fetched = false
    state.channelDetails = null
  },
  [TYPES.CACHE_CHANNEL_DETAILS](state, channelDetailsList) {
    state.channelDetailsList = channelDetailsList
  }
}

// Actions
const actions = {

  checkChannelDetailsPresent({ state }, channel) {

    let channelId = channel.channelId
    return Boolean(state.channelDetailsList && state.channelDetailsList[channelId] || false)
  },
  cacheChannelDetails({ state, commit, getters }, channelDetails) {

    let channelDetailsList = Object.assign({}, state.channelDetailsList) // Array copy  
    let channelId = channelDetails.channelId

    channelDetailsList[channelId] = channelDetails
    commit(TYPES.CACHE_CHANNEL_DETAILS, channelDetailsList)
  },

  async fetchChannelDetails({ state, commit, dispatch }, { channel }) {

    let channelId = channel.channelId
    commit(TYPES.FETCHING_CHANNEL_DETAILS)

    // 1. check cache 
    if (state.channelDetailsList && state.channelDetailsList[channelId]) {
      commit(TYPES.FETCHING_CHANNEL_DETAILS_SUCCESS, state.channelDetailsList[channelId])
    } else {

      //2. Fetch
      let response = await fetch([`${PATH}${API_ENDPOINTS.CHANNEL_DETAILS}?channelId=${channelId}`]);
      let data = JSON.parse(await response.json())
      if (data.responseCode != "200") {
        commit(TYPES.FETCHING_CHANNEL_DETAILS_ERROR, data.responseMessage)
      } else {
        let channelDetails = data.channel[0]
        commit(TYPES.FETCHING_CHANNEL_DETAILS_SUCCESS, channelDetails)
        // Also caching for future use 
        dispatch('cacheChannelDetails', channelDetails)
      }
    }
  },
  fetchChannelLogo({ state }) {
    let channelDetails = state.channelDetails

    debugger
    let imageData = state.channelDetails.channelExtRef.find(item => {
      return item.system.trim() == "Logo" && item.subSystem.trim() == "Pos_600x370"
    })

    return imageData && imageData.value
  },
  clearChannelDetails({ commit }) {
    commit(TYPES.CLEAR_CHANNEL_DETAILS)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
