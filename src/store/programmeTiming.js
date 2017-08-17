/*eslint-disable*/
import * as TYPES from './mutation-types'
import { PATH, API_ENDPOINTS } from './config'

/*
let programme = {
    "responseCode": "200",
    "responseMessage": "Success",
    "getevent": [{
        "eventID": "26042237",
        "channelId": 1,
        "channelStbNumber": "411",
        "channelHD": "false",
        "channelTitle": "HBO",
        "epgEventImage": "https://s3-ap-southeast-1.amazonaws.com/ams-astro/production/images/Allied.jpg",
        "certification": "18",
        "displayDateTimeUtc": "2017-08-22 13:00:00.0",
        "displayDateTime": "2017-08-22 21:00:00.0",
        "displayDuration": "02:05:00",
        "siTrafficKey": "1:998:31679510",
        "programmeTitle": "Allied",
        "programmeId": "188166",
        "episodeId": "",
        "shortSynopsis": "When an Intelligence Officer learns that his wife may be working with the enemy in secret, he has only 3 days to prove her innocence and save his family.",
        "longSynopsis": null,
        "actors": "Brad Pitt,Marion Cotillard,Jared Harris",
        "directors": "Robert Zemeckis",
        "producers": "",
        "genre": "Movie",
        "subGenre": "Drama",
        "live": false,
        "premier": false,
        "ottBlackout": false,
        "highlight": null,
        "contentId": 3980,
        "contentImage": [{
            "imageURL": "https://s3-ap-southeast-1.amazonaws.com/ams-astro/production/images/Allied.jpg",
            "imageRole": "Poster"
        }],
        "groupKey": null,
        "vernacularData": []
    }, {
        "eventID": "26042238",
        "channelId": 1,
        "channelStbNumber": "411",
        "channelHD": "false",
        "channelTitle": "HBO",
        "epgEventImage": null,
        "certification": "18",
        "displayDateTimeUtc": "2017-08-22 15:05:00.0",
        "displayDateTime": "2017-08-22 23:05:00.0",
        "displayDuration": "01:35:00",
        "siTrafficKey": "1:998:31679410",
        "programmeTitle": "Terrordactyl",
        "programmeId": "99367",
        "episodeId": "",
        "shortSynopsis": "Two friends are pursued by an ancient flying reptiles after they recover a meteor from a meteor shower outside Los Angeles.",
        "longSynopsis": null,
        "actors": "Jason Tobias,Bianca Hasse,Christopher Jennings",
        "directors": "Geoff Reisner",
        "producers": "",
        "genre": "Movie",
        "subGenre": "Action",
        "live": false,
        "premier": false,
        "ottBlackout": false,
        "highlight": null,
        "contentId": null,
        "contentImage": null,
        "groupKey": null,
        "vernacularData": []
    },{ "eventID": "26042237", "channelId": 1, "channelStbNumber": "411", "channelHD": "false", "channelTitle": "HBO", "epgEventImage": "https://s3-ap-southeast-1.amazonaws.com/ams-astro/production/images/Allied.jpg", "certification": "18", "displayDateTimeUtc": "2017-08-22 13:00:00.0", "displayDateTime": "2017-08-22 21:00:00.0", "displayDuration": "02:05:00", "siTrafficKey": "1:998:31679510", "programmeTitle": "Allied", "programmeId": "188166", "episodeId": "", "shortSynopsis": "When an Intelligence Officer learns that his wife may be working with the enemy in secret, he has only 3 days to prove her innocence and save his family.", "longSynopsis": null, "actors": "Brad Pitt,Marion Cotillard,Jared Harris", "directors": "Robert Zemeckis", "producers": "", "genre": "Movie", "subGenre": "Drama", "live": false, "premier": false, "ottBlackout": false, "highlight": null, "contentId": 3980, "contentImage": [{ "imageURL": "https://s3-ap-southeast-1.amazonaws.com/ams-astro/production/images/Allied.jpg", "imageRole": "Poster" }], "groupKey": null, "vernacularData": [] }, { "eventID": "26042238", "channelId": 1, "channelStbNumber": "411", "channelHD": "false", "channelTitle": "HBO", "epgEventImage": null, "certification": "18", "displayDateTimeUtc": "2017-08-22 15:05:00.0", "displayDateTime": "2017-08-22 23:05:00.0", "displayDuration": "01:35:00", "siTrafficKey": "1:998:31679410", "programmeTitle": "Terrordactyl", "programmeId": "99367", "episodeId": "", "shortSynopsis": "Two friends are pursued by an ancient flying reptiles after they recover a meteor from a meteor shower outside Los Angeles.", "longSynopsis": null, "actors": "Jason Tobias,Bianca Hasse,Christopher Jennings", "directors": "Geoff Reisner", "producers": "", "genre": "Movie", "subGenre": "Action", "live": false, "premier": false, "ottBlackout": false, "highlight": null, "contentId": null, "contentImage": null, "groupKey": null, "vernacularData": [] }, { "eventID": "26042239", "channelId": 1, "channelStbNumber": "411", "channelHD": "false", "channelTitle": "HBO", "epgEventImage": null, "certification": "18", "displayDateTimeUtc": "2017-08-22 16:40:00.0", "displayDateTime": "2017-08-23 00:40:00.0", "displayDuration": "01:35:00", "siTrafficKey": "1:998:31679434", "programmeTitle": "I'll See You in My Dreams", "programmeId": "120941", "episodeId": "", "shortSynopsis": "With the help of her three quirky girlfriends, Carol decides to seek out new experiences and find love in places she never expected.", "longSynopsis": null, "actors": "Blythe Danner,Martin Starr,June Squibb", "directors": "Brett Haley", "producers": "", "genre": "Movie", "subGenre": "Comedy", "live": false, "premier": false, "ottBlackout": false, "highlight": null, "contentId": null, "contentImage": null, "groupKey": null, "vernacularData": [] }, { "eventID": "26042240", "channelId": 1, "channelStbNumber": "411", "channelHD": "false", "channelTitle": "HBO", "epgEventImage": null, "certification": "18", "displayDateTimeUtc": "2017-08-22 18:15:00.0", "displayDateTime": "2017-08-23 02:15:00.0", "displayDuration": "02:05:00", "siTrafficKey": "1:998:31679418", "programmeTitle": "I Saw the Light", "programmeId": "130885", "episodeId": "", "shortSynopsis": "This film chronicles the life of legendary country singer Hank Williams, from his rise to fame to the tragic effect on his health and personal life.", "longSynopsis": null, "actors": "Tom Hiddleston,Elizabeth Olsen,Maddie Hasson", "directors": "Marc Abraham", "producers": "", "genre": "Movie", "subGenre": "Drama", "live": false, "premier": false, "ottBlackout": false, "highlight": null, "contentId": null, "contentImage": null, "groupKey": null, "vernacularData": [] }, { "eventID": "26042241", "channelId": 1, "channelStbNumber": "411", "channelHD": "false", "channelTitle": "HBO", "epgEventImage": null, "certification": "18", "displayDateTimeUtc": "2017-08-22 20:20:00.0", "displayDateTime": "2017-08-23 04:20:00.0", "displayDuration": "01:40:00", "siTrafficKey": "1:998:31679462", "programmeTitle": "Pacific Heights", "programmeId": "92304", "episodeId": "", "shortSynopsis": "In a Victorian home several miles southeast of Pacific Heights, a young couple rents out a unit in their San Francisco home to a supposedly model tenant.", "longSynopsis": null, "actors": "Melanie Griffith,Matthew Modine,Michael Keaton", "directors": "John Schlesinger", "producers": "", "genre": "Movie", "subGenre": "Horror / Supernatural", "live": false, "premier": false, "ottBlackout": false, "highlight": null, "contentId": null, "contentImage": null, "groupKey": null, "vernacularData": [] }, { "eventID": "26042242", "channelId": 1, "channelStbNumber": "411", "channelHD": "false", "channelTitle": "HBO", "epgEventImage": null, "certification": "U", "displayDateTimeUtc": "2017-08-22 22:00:00.0", "displayDateTime": "2017-08-23 06:00:00.0", "displayDuration": "00:30:00", "siTrafficKey": "1:998:31679370", "programmeTitle": "Hollywood on Set 715", "programmeId": "188075", "episodeId": "", "shortSynopsis": "Go behind the scenes of three major motion pictures per week; catch action footage and interviews with actors and filmmakers.", "longSynopsis": null, "actors": "", "directors": "", "producers": "", "genre": "TV Show", "subGenre": "Entertainment", "live": false, "premier": false, "ottBlackout": false, "highlight": null, "contentId": null, "contentImage": null, "groupKey": null, "vernacularData": [] }, { "eventID": "26042243", "channelId": 1, "channelStbNumber": "411", "channelHD": "false", "channelTitle": "HBO", "epgEventImage": null, "certification": "PG-13", "displayDateTimeUtc": "2017-08-22 22:30:00.0", "displayDateTime": "2017-08-23 06:30:00.0", "displayDuration": "01:25:00", "siTrafficKey": "1:998:31679401", "programmeTitle": "Murder, She Baked: a Chocolate Chip Cookie Mystery", "programmeId": "149876", "episodeId": "", "shortSynopsis": "Hannah's idylllic world is turned upside down following the murder of her good friend in the alley behind her bakeshop.", "longSynopsis": null, "actors": "Alison Sweeney ,Cameron Mathison,Lisa Durupt", "directors": "Mark Jean", "producers": "", "genre": "Movie", "subGenre": "Drama", "live": false, "premier": false, "ottBlackout": false, "highlight": null, "contentId": null, "contentImage": null, "groupKey": null, "vernacularData": [] }, { "eventID": "26042244", "channelId": 1, "channelStbNumber": "411", "channelHD": "false", "channelTitle": "HBO", "epgEventImage": null, "certification": "18", "displayDateTimeUtc": "2017-08-22 23:55:00.0", "displayDateTime": "2017-08-23 07:55:00.0", "displayDuration": "02:00:00", "siTrafficKey": "1:998:31679411", "programmeTitle": "Red Dragon", "programmeId": "120914", "episodeId": "", "shortSynopsis": "FBI Agent Will Graham comes out of early retirement to catch 'The Tooth Fairy', a serial killer, and asks Dr. Hannibal 'The Cannibal' Lecter for help.", "longSynopsis": null, "actors": "Anthony Hopkins,Ralph Fiennes,Edward Norton", "directors": "Brett Ratner", "producers": "", "genre": "Movie", "subGenre": "Drama", "live": false, "premier": false, "ottBlackout": false, "highlight": null, "contentId": null, "contentImage": null, "groupKey": null, "vernacularData": [] }, { "eventID": "26042245", "channelId": 1, "channelStbNumber": "411", "channelHD": "false", "channelTitle": "HBO", "epgEventImage": null, "certification": "PG-13", "displayDateTimeUtc": "2017-08-23 01:55:00.0", "displayDateTime": "2017-08-23 09:55:00.0", "displayDuration": "02:00:00", "siTrafficKey": "1:998:31679365", "programmeTitle": "Love & Mercy", "programmeId": "120878", "episodeId": "", "shortSynopsis": "This film intimately examines the personal voyage and ultimate salvation of pop icon Brian Wilson, whose success came at extraordinary personal cost.", "longSynopsis": null, "actors": "John Cusack,Paul Dano,Elizabeth Banks", "directors": "Bill Pohlad", "producers": "", "genre": "Movie", "subGenre": "Drama", "live": false, "premier": false, "ottBlackout": false, "highlight": null, "contentId": null, "contentImage": null, "groupKey": null, "vernacularData": [] }, { "eventID": "26042246", "channelId": 1, "channelStbNumber": "411", "channelHD": "false", "channelTitle": "HBO", "epgEventImage": "https://s3-ap-southeast-1.amazonaws.com/ams-astro/production/images/Allied.jpg", "certification": "18", "displayDateTimeUtc": "2017-08-23 03:55:00.0", "displayDateTime": "2017-08-23 11:55:00.0", "displayDuration": "02:05:00", "siTrafficKey": "1:998:31679405", "programmeTitle": "Allied", "programmeId": "188166", "episodeId": "", "shortSynopsis": "When an Intelligence Officer learns that his wife may be working with the enemy in secret, he has only 3 days to prove her innocence and save his family.", "longSynopsis": null, "actors": "Brad Pitt,Marion Cotillard,Jared Harris", "directors": "Robert Zemeckis", "producers": "", "genre": "Movie", "subGenre": "Drama", "live": false, "premier": false, "ottBlackout": false, "highlight": null, "contentId": 3980, "contentImage": [{ "imageURL": "https://s3-ap-southeast-1.amazonaws.com/ams-astro/production/images/Allied.jpg", "imageRole": "Poster" }], "groupKey": null, "vernacularData": [] }, { "eventID": "26042247", "channelId": 1, "channelStbNumber": "411", "channelHD": "false", "channelTitle": "HBO", "epgEventImage": null, "certification": "18", "displayDateTimeUtc": "2017-08-23 06:00:00.0", "displayDateTime": "2017-08-23 14:00:00.0", "displayDuration": "01:45:00", "siTrafficKey": "1:998:31679486", "programmeTitle": "Our Brand Is Crisis", "programmeId": "120946", "episodeId": "", "shortSynopsis": "A political strategist comes out of self-imposed exile to handle the faltering campaign of a Bolivian presidential candidate for a chance to beat her nemesis.", "longSynopsis": null, "actors": "Sandra Bullock,Billy Bob Thornton,Anthony Mackie", "directors": "David Gordon Green", "producers": "", "genre": "Movie", "subGenre": "Comedy", "live": false, "premier": false, "ottBlackout": false, "highlight": null, "contentId": null, "contentImage": null, "groupKey": null, "vernacularData": [] }, { "eventID": "26042248", "channelId": 1, "channelStbNumber": "411", "channelHD": "false", "channelTitle": "HBO", "epgEventImage": null, "certification": "PG-13", "displayDateTimeUtc": "2017-08-23 07:45:00.0", "displayDateTime": "2017-08-23 15:45:00.0", "displayDuration": "01:55:00", "siTrafficKey": "1:998:31679502", "programmeTitle": "Jem and the Holograms", "programmeId": "100176", "episodeId": "", "shortSynopsis": "Four aspiring musicians will take the world by storm when they see that the key to creating your own destiny lies in finding your own voice.", "longSynopsis": null, "actors": "Aubrey Peeples,Stefanie Scott,Aurora Perrineau", "directors": "Jon Chu", "producers": "", "genre": "Movie", "subGenre": "Drama", "live": false, "premier": false, "ottBlackout": false, "highlight": null, "contentId": null, "contentImage": null, "groupKey": null, "vernacularData": [] }, { "eventID": "26042249", "channelId": 1, "channelStbNumber": "411", "channelHD": "false", "channelTitle": "HBO", "epgEventImage": null, "certification": "18", "displayDateTimeUtc": "2017-08-23 09:40:00.0", "displayDateTime": "2017-08-23 17:40:00.0", "displayDuration": "01:30:00", "siTrafficKey": "1:998:31679338", "programmeTitle": "Aeonflux", "programmeId": "1538", "episodeId": "", "shortSynopsis": "Four hundred years into the future, a top assassin is sent to kill the leader of the last human bastion.", "longSynopsis": null, "actors": "Charlize Theron,Marton Csokas,Jonny Lee Miller", "directors": "Karyn Kusama", "producers": "", "genre": "Movie", "subGenre": "Action", "live": false, "premier": false, "ottBlackout": false, "highlight": null, "contentId": null, "contentImage": null, "groupKey": null, "vernacularData": [] }, { "eventID": "26042250", "channelId": 1, "channelStbNumber": "411", "channelHD": "false", "channelTitle": "HBO", "epgEventImage": null, "certification": "18", "displayDateTimeUtc": "2017-08-23 11:10:00.0", "displayDateTime": "2017-08-23 19:10:00.0", "displayDuration": "01:50:00", "siTrafficKey": "1:998:31679508", "programmeTitle": "Whiskey Tango Foxtrot", "programmeId": "131067", "episodeId": "", "shortSynopsis": "When a reporter's life needs something more, she decides to 'shake it all up' by taking an assignment in a war zone.", "longSynopsis": null, "actors": "Tina Fey,Margot Robbie,Martin Freeman", "directors": "Glenn Ficarra", "producers": "", "genre": "Movie", "subGenre": "Comedy", "live": false, "premier": false, "ottBlackout": false, "highlight": null, "contentId": null, "contentImage": null, "groupKey": null, "vernacularData": [] }]
}

*/

// Initial State
const state = {
  programmeTimingList: null,
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

  [TYPES.FETCHING_CHANNEL_LIST_PROGRAMME](state) {
    state.fetching = true
    state.fetched = false
  },
  [TYPES.FETCHING_CHANNEL_LIST_PROGRAMME_SUCCESS](state, channelList) {
    state.fetching = false
    state.fetched = true
    state.channelList = channelList
  },
  [TYPES.FETCHING_CHANNEL_LIST_PROGRAMME_ERROR](state, errorMessage) {
    state.fetching = false
    state.fetched = false
    state.errorMessage = errorMessage
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
