<template>
    <div class="channel__guide__view">

        <!-- Channel Filter -->
        <div class="channel__filter">
            <label for="txtSearch">Search Channel:</label>
            <input type="text" ref="$searchText" v-stream:keyup="searchText$" name="txtSearch" placeholder="Search Channel List">
            <button class="btn__clear__favourites" @click="$store.dispatch('clearFavouriteList')">Clear favourites</button>
        </div>

        <!-- Channel List & EPG  -->
        <div class="channel__section">
            <!-- Channel List Column-->
            <div class="channel__list__section">

                <!-- Channel Header / Sorting-->
                <div class="channel__header">
                    <div :class="{active:sortOn=='channelTitle'}" @click="onChannelSortClick('channelTitle')">
                        <span>Channel</span>
                        <span v-show="sortOn=='channelTitle'">
                          <img style="width: 16px;filter: invert(1);" :class="{invert:sortOrder==-1}" src="./../assets/arrow.png" alt="Vue.js PWA">
                      </span>
                    </div>
                    <div :class="{active:sortOn=='channelStbNumber'}" @click="onChannelSortClick('channelStbNumber')">
                        <span>Number</span>
                        <span v-show="sortOn=='channelStbNumber'">
                          <img style="width: 16px;filter: invert(1);" :class="{invert:sortOrder==-1}" src="./../assets/arrow.png" alt="Vue.js PWA">
                      </span>
                    </div>
                </div>

                <!-- Channel list -->
                <div class="channel__name__box" @click.prevent="onChannelClick(channel)" :data-channel="channel.channelId" v-for="channel in filteredChannelList" track-by="channel.channelId">
                    <div class="channel__name">
                        <div>{{channel.channelTitle}}</div>
                        <div style="font-size:0.8em;font-weight:bold;color: #4085ce;">{{channel.channelStbNumber}}</div>
                    </div>
                    <div class="favourite" @click.stop="onFavouriteClick(channel)">
                        <span v-show="favouriteListComputed.indexOf(channel.channelId) != -1">♥</span>
                        <span v-show="favouriteListComputed.indexOf(channel.channelId) == -1">♡</span>
                    </div>
                </div>
            </div>

            <!-- Scrollable EPG Programme Guide  -->
            <div class="channel__programme__section">

                <!-- EPG Header -->
                <div class="programme__header">
                    <div class="header__time" v-for="n in hoursList">
                        {{n}}:00 to {{n+1}}:00
                    </div>
                </div>

                <!-- Programme Listing -->
                <div class="programme__timing__section">
                    <div class="programme__row" v-for="channel in filteredChannelList" track-by="channel.channelId" :data-channel-id="channel.channelId" :data-programme-fetched="typeof channel.programmes != 'undefined'">
                        <span class="programme programme--no__data" v-show="typeof channel.programmes == 'undefined'">No Data Available or Fetching Data</span>
                        <span class="programme" :style="{ flex:'0 0 ' +(programme.durationMinutes * minuteWidthPx) + 'px' }" v-for="programme in channel.programmes" @mouseover="onProgrammeHover($event,programme,channel)" @mouseout="onProgrammeHoverOut">
                       <div> {{programme.programmeTitle}}</div>
                       <sup> {{programme.genre}}</sup>
                       <sup style="float:right">{{programme.durationMinutes}}mins.</sup>
                      </span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Single Channel Details Popup Overlay -->
        <channel-details v-if="ischannelDetailsFetched"></channel-details>
        <div v-show="ischannelDetailsFetching">Fetching Channel data ... </div>

        <!-- Single Programme Details -->
        <programme-details-popup v-show="currentProgramme" :programmeDetails="currentProgramme" :channelDetails="currentChannel"></programme-details-popup>

    </div>
</template>
<script>
/*eslint-disable*/
import { mapGetters, mapActions, mapMutations } from 'vuex'
import ChannelDetails from './ChannelDetails'
import ProgrammeDetailsPopup from './ProgrammeDetails'
import moment from 'moment'
// import { Observable } from 'rxjs/Observable'
// import 'rxjs/add/observable/fromEvent'
// import 'rxjs/add/operator/scan'
import Rx from 'rxjs/Rx'
export default {
  name: 'channel-list',
  components: {
    ChannelDetails,
    ProgrammeDetailsPopup
  },
  data() {
    return {
      favouriteList: [],
      currentProgramme: null,
      currentChannel: null,
      minuteWidthPx: window.innerWidth > 600 ? 5 : 3,
      $programmeRows: null,
      SCROLL_WAIT_MS: 500,
    }
  },
  mounted() {
    // Sorting by default
    this.onChannelSortClick('channelTitle')
    this.fetchFavouriteList()
    //Caching the programme rows
    this.$programmeRows = document.querySelectorAll('.programme__timing__section .programme__row')
  },
  subscriptions() {
    let context = this;
    this.searchText$ = new Rx.Subject;

    return {
      searchText: this.searchText$
        .map((e) => e.event.currentTarget.value)
        .debounce(e => Rx.Observable.timer(400)),

      scrollPage: Rx.Observable.fromEvent(document, 'scroll')
        .debounce(e => Rx.Observable.timer(this.SCROLL_WAIT_MS))
        .map(function(scrollEvent) {
          context.onViewUpdated()
        })
        .distinctUntilChanged(),

    }
  },
  computed: {
    ...mapGetters([
      'channelList',
      'sortOrder',
      'sortOn',
      'favourites',
      'ischannelDetailsFetching',
      'ischannelDetailsFetched',
      'programmeDate'
    ]),
    favouriteListComputed() { return this.favouriteList || [] },
    filteredChannelList() {
      let searchText = this.searchText && this.searchText.toLowerCase().trim() || ''
      if (!searchText) { return this.channelList }

      // Wait for the Filtered view to render then fetch the programme data
      setTimeout(() => { this.onViewUpdated() }, this.SCROLL_WAIT_MS)

      return this.channelList.filter((channel) => {
        return channel.channelTitle.toLowerCase().trim().indexOf(searchText) != -1
      })
    },
    // Utility
    hoursList() {
      return this.range(moment(this.programmeDate).get('hours'), 24)
    }
  },

  methods: {
    ...mapActions(['increment', 'sortChannelList', 'getFavouriteList', 'clearFavouriteList', 'setProgrammeDate']),
    // ...mapMutations(['INCREMENT'])
    onChannelClick(channel) {
      this.$store.dispatch({
        type: 'fetchChannelDetails',
        channel: channel
      })
    },
    onFavouriteClick(channel) {
      this.$store.dispatch({
        type: 'toggleFavourites',
        channel: channel
      })
    },
    onChannelSortClick(sortOn) {
      this.$store.dispatch({
        type: 'sortChannelList',
        sortOrder: this.sortOrder * -1,
        sortOn: sortOn
      })
    },
    onProgrammeHover(e, programme, channel) {
      this.currentProgramme = programme
      this.currentChannel = channel
    },
    onProgrammeHoverOut() {
      this.currentProgramme = null
      this.currentChannel = null
    },
    onViewUpdated() {

      function isElementInViewport(e) { for (var f = e.offsetTop, t = e.offsetLeft, o = e.offsetWidth, n = e.offsetHeight; e.offsetParent;) e = e.offsetParent, f += e.offsetTop, t += e.offsetLeft; return f < window.pageYOffset + window.innerHeight && t < window.pageXOffset + window.innerWidth && f + n > window.pageYOffset && t + o > window.pageXOffset }

      function isProgrammeDataNotPresent(elem) {
        return elem.getAttribute('data-programme-fetched') == null
      }

      let channelIdListVisibleInViewPort = Array.from(this.$programmeRows)
        .filter(isElementInViewport)
        .filter(isProgrammeDataNotPresent)
        .map(elem => {
          return Number(elem.getAttribute('data-channel-id'));
        })

      if (channelIdListVisibleInViewPort.length > 0) {
        this.fetchProgrammes(channelIdListVisibleInViewPort)
      }
    },
    async fetchFavouriteList() {
      let list = await this.$store.dispatch('getFavouriteList')
      this.favouriteList = list
    },
    fetchProgrammes(channelList) {
      this.$store.dispatch('fetchProgrammeTimings', channelList)
    },
    range(start, end) {
      return Array.from({ length: (end - start) }, (v, k) => k + start)
    }
  },
  watch: {
    favourites(oldVal, newVal) {
      this.fetchFavouriteList()
    }
  }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>/*=============================================== CONTAINER ===============================================*/
.channel__guide__view {
    width: 80vw;
    margin: 0 auto;
    text-align: left;
    box-sizing: border-box;
    /*user-select: none;*/
}


/*=============================================== CHANNEL FILTER ===============================================*/

.channel__filter {
    background-color: #333;
    color: #368ed2;
    padding: 20px;
    margin-bottom: 20px;
}

.channel__filter .btn__clear__favourites {
    background-color: #1b62cc;
    color: #fff5f5;
    border: 1px solid #6894d4;
    cursor: pointer;
    padding: 5px 10px;
}

.channel__filter input {
    margin: 0px 10px;
    outline: none;
    border-radius: 20px;
    padding: 3px 15px;
}


/*=============================================== CHANNEL SECTION ===============================================*/

.channel__section {
    display: flex;
    flex-direction: row;
    cursor: pointer;
}


/*=============================================== CHANNEL LIST COLUMN ( CHANNEL NAME + FAVOURITE ICON )===============================================*/

.channel__list__section {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    flex: 0 0 200px;
}

.channel__list__section>div {
    border: 1px solid #dcdcdc;
    padding: 0 10px;
    display: flex;
    flex: 0 0 40px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.channel__list__section .favourite {
    font-size: 1.5em;
    color: rgb(231, 9, 98);
    text-align: center;
}

.channel__list__section .channel__header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-size: 0.8em;
    background-color: #333;
    color: #4085ce;
}

.channel__header .active {
    font-weight: bold;
}

.channel__header>* {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 40px;
}

.channel__name__box {
    font-weight: bold;
    font-size: 0.8em;
    display: block;
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.invert {
    transform: rotate(180deg);
}


/*=============================================== EPG TV PROGRAMME TIMING ( PROGRAMME TIME + BUTTON TO MOVE GUIDE )  ===============================================*/


/*.channel__programme__section {
  display:block;
   overflow-x: scroll;
}

.channel__programme__section .programme__header{
      font-size: 0.8em;
          line-height: 3em;
    height: 40px;
    background-color: #000000;
    color: #4085ce;

        line-height: 3em;
    padding: 10px;
    margin: 0;
    font-size: 1em;
    width: 100%;
    display: inline;
}
*/

.channel__programme__section {
    overflow-x: scroll;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
}

.channel__programme__section .programme__header {
    font-size: 0.8em;
    height: 40px;
    background-color: #333;
    color: #4085ce;
    border: 1px solid #909090;
    line-height: 40px;
    display: flex;
    flex-direction: row;
}


.programme__header .header__time {
    flex: 0 0 300px;
    padding-left: 15px;
    box-sizing: border-box;
    background-color: rgb(51, 51, 51);
    border-right: 2px solid #464646;
}

.programme__row {
    display: flex;
    flex-direction: row;
    height: 42px;
    /*border: 1px solid #dcdcdc;*/
    /*padding: 0 10px;*/
}

.programme__timing__section {
    background-color: #e7e7e7;
}

.programme__row .programme {
    flex: 0 0 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /* line-height: 30px; */
    padding: 8px 10px;
    font-size: 0.8em;
    font-weight: bold;
    box-sizing: border-box;
    border: 1px solid #dcdcdc;
    background-color: #e7e7e7;
}

.programme__row .programme--no__data {
    line-height: 40px;
    padding: 0 10px;
    font-size: 0.8em;
    font-weight: bold;
    box-sizing: content-box;
}

.programme__row sup {
    color: rgb(198, 88, 42);
    line-height: 15px;
}


/*=============================================== OTHERS  ===============================================*/


/*=============================================== MOBILE DEVICE ===============================================*/

@media screen and (max-width: 600px) {
    /*=============================================== CONTAINER ===============================================*/
    .channel__guide__view {
        font-size: 0.8em;
    }
    /*=============================================== CHANNEL FILTER ===============================================*/
    .channel__filter .btn__clear__favourites,
    .channel__filter input {
        margin: 10px 0px;
        width: 100%;
        padding: 5px;
    }

    .channel__filter input {}
    /*=============================================== CHANNEL SECTION ===============================================*/
    .channel__list__section {
        flex: 0 0 60px;
    }
    /*=============================================== CHANNEL LIST COLUMN ( CHANNEL NAME + FAVOURITE ICON )===============================================*/
    .channel__list__section .channel__name__box {
        width: 60px;
        display: inline-block;
    }
    .channel__list__section .channel__header {
        flex-direction: column;
    }
    .channel__list__section>div {
        flex-direction: column
    }
    .channel__name div {
        display: block;
        text-align: center
    }
    /*=============================================== EPG TV PROGRAMME TIMING ( PROGRAMME TIME + BUTTON TO MOVE GUIDE )  ===============================================*/
    .programme__header .header__time {
        flex: 0 0 180px;
    }
    .programme__row .programme {
        flex: 0 0 180px;
    }
    /*=============================================== OTHERS  ===============================================*/
}
</style>
