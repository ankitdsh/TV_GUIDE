/*eslint-disable*/
import * as TYPES from './mutation-types'
import { PATH, API_ENDPOINTS, API_DATE_FORMAT } from './config'
import _ from 'lodash'
import moment from 'moment'

/*
 let channels = [{
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
}, { channelId: 2, channelTitle: "Astro Wah Lai Toi", channelStbNumber: 311 }, { channelId: 3, channelTitle: "Astro Prima", channelStbNumber: 105 }, { channelId: 4, channelTitle: "Sun TV", channelStbNumber: 211 }, { channelId: 5, channelTitle: "Astro Vaanavil", channelStbNumber: 201 }, { channelId: 6, channelTitle: "TVB Xing He", channelStbNumber: 314 }, { channelId: 7, channelTitle: "Disney Channel", channelStbNumber: 615 }, { channelId: 8, channelTitle: "Lifetime Channel", channelStbNumber: 709 }, { channelId: 9, channelTitle: "Astro Hua Hee Dai", channelStbNumber: 333 }, { channelId: 10, channelTitle: "Astro SuperSport 2", channelStbNumber: 811 }, { channelId: 11, channelTitle: "FOX Movies", channelStbNumber: 413 }, { channelId: 12, channelTitle: "National Geographic Channel", channelStbNumber: 553 }, { channelId: 13, channelTitle: "Cartoon Network", channelStbNumber: 616 }, { channelId: 14, channelTitle: "ERA", channelStbNumber: 856 }, { channelId: 15, channelTitle: "MY FM", channelStbNumber: 853 }, { channelId: 16, channelTitle: "Opus", channelStbNumber: 862 }, { channelId: 17, channelTitle: "hitz.fm", channelStbNumber: 852 }, { channelId: 18, channelTitle: "MIX FM", channelStbNumber: 855 }, { channelId: 19, channelTitle: "LITE FM", channelStbNumber: 854 }, { channelId: 20, channelTitle: "Classic Rock", channelStbNumber: 860 }, { channelId: 21, channelTitle: "Gold", channelStbNumber: 861 }, { channelId: 22, channelTitle: "THR Gegar", channelStbNumber: 863 }, { channelId: 23, channelTitle: "India Beat", channelStbNumber: 864 }, { channelId: 24, channelTitle: "Jazz", channelStbNumber: 865 }, { channelId: 25, channelTitle: "NAS FM", channelStbNumber: 869 }, { channelId: 26, channelTitle: "Sinar FM", channelStbNumber: 857 }, { channelId: 27, channelTitle: "Osai FM", channelStbNumber: 866 }, { channelId: 28, channelTitle: "Melody FM", channelStbNumber: 858 }, { channelId: 29, channelTitle: "V FM", channelStbNumber: 870 }, { channelId: 30, channelTitle: "THR Raaga", channelStbNumber: 859 }, { channelId: 31, channelTitle: "Bayu FM", channelStbNumber: 867 }, { channelId: 32, channelTitle: "Radio Kenyalang", channelStbNumber: 868 }, { channelId: 33, channelTitle: "Raj TV", channelStbNumber: 222 }, { channelId: 34, channelTitle: "AXN", channelStbNumber: 701 }, { channelId: 35, channelTitle: "TVBS Asia", channelStbNumber: 317 }, { channelId: 36, channelTitle: "MTV Asia", channelStbNumber: 713 }, { channelId: 37, channelTitle: "Discovery Science", channelStbNumber: 554 }, { channelId: 38, channelTitle: "Eurosport", channelStbNumber: 814 }, { channelId: 39, channelTitle: "BBC World News", channelStbNumber: 512 }, { channelId: 40, channelTitle: "Animal Planet", channelStbNumber: 556 }, { channelId: 41, channelTitle: "CNBC Asia", channelStbNumber: 518 }, { channelId: 42, channelTitle: "Arabic Radio & TV Variety", channelStbNumber: 111 }, { channelId: 43, channelTitle: "Phoenix Info News", channelStbNumber: 323 }, { channelId: 44, channelTitle: "CGTN", channelStbNumber: 509 }, { channelId: 45, channelTitle: "Disney Junior", channelStbNumber: 613 }, { channelId: 46, channelTitle: "KBS World", channelStbNumber: 391 }, { channelId: 47, channelTitle: "Makkal TV", channelStbNumber: 203 }, { channelId: 48, channelTitle: "TV 9", channelStbNumber: 119 }, { channelId: 49, channelTitle: "Astro Xiao Tai Yang", channelStbNumber: 325 }, { channelId: 50, channelTitle: "Nickelodeon", channelStbNumber: 612 }, { channelId: 51, channelTitle: "Chutti TV", channelStbNumber: 213 }, { channelId: 52, channelTitle: "Australia Plus TV", channelStbNumber: 521 }, { channelId: 53, channelTitle: "Astro Warna", channelStbNumber: 132 }, { channelId: 54, channelTitle: "Discovery Channel", channelStbNumber: 551 }, { channelId: 55, channelTitle: "Astro Ceria", channelStbNumber: 611 }, { channelId: 56, channelTitle: "Phoenix Chinese Channel", channelStbNumber: 312 }, { channelId: 57, channelTitle: "TVBE News", channelStbNumber: 313 }, { channelId: 58, channelTitle: "FOX Sports 3", channelStbNumber: 818 }, { channelId: 59, channelTitle: "Astro Tutor TV UPSR", channelStbNumber: 601 }, { channelId: 60, channelTitle: "Astro Citra", channelStbNumber: 131 }, { channelId: 61, channelTitle: "Astro Vellithirai", channelStbNumber: 202 }, { channelId: 62, channelTitle: "Cinemax", channelStbNumber: 412 }, { channelId: 63, channelTitle: "National Geographic Wild", channelStbNumber: 550 }, { channelId: 64, channelTitle: "Astro On Demand CH361", channelStbNumber: 361 }, { channelId: 65, channelTitle: "Astro On Demand 362", channelStbNumber: 362 }, { channelId: 66, channelTitle: "Astro On Demand 363", channelStbNumber: 363 }, { channelId: 67, channelTitle: "Adithya", channelStbNumber: 214 }, { channelId: 68, channelTitle: "CNN", channelStbNumber: 511 }, { channelId: 69, channelTitle: "Astro SuperSport 3", channelStbNumber: 816 }, { channelId: 70, channelTitle: "Astro Oasis", channelStbNumber: 106 }, { channelId: 71, channelTitle: "Astro SuperSport", channelStbNumber: 810 }, { channelId: 72, channelTitle: "FOX Sports 2", channelStbNumber: 813 }, { channelId: 73, channelTitle: "Astro Ria", channelStbNumber: 104 }, { channelId: 74, channelTitle: "FOX Sports", channelStbNumber: 812 }, { channelId: 75, channelTitle: "Star World", channelStbNumber: 711 }, { channelId: 76, channelTitle: "Diva", channelStbNumber: 702 }, { channelId: 77, channelTitle: "Astro Bella", channelStbNumber: 133 }, { channelId: 78, channelTitle: "Bloomberg Television", channelStbNumber: 519 }, { channelId: 79, channelTitle: "Disney XD", channelStbNumber: 617 }, { channelId: 80, channelTitle: "Astro AEC", channelStbNumber: 301 }, { channelId: 82, channelTitle: "Sun Music", channelStbNumber: 212 }, { channelId: 83, channelTitle: "E! Entertainment", channelStbNumber: 712 }, { channelId: 84, channelTitle: "Astro Awani", channelStbNumber: 501 }, { channelId: 85, channelTitle: "Kah Lai Toi", channelStbNumber: 304 }, { channelId: 86, channelTitle: "Animax", channelStbNumber: 715 }, { channelId: 87, channelTitle: "Astro On Demand CH352", channelStbNumber: 352 }, { channelId: 88, channelTitle: "Bintang", channelStbNumber: 141 }, { channelId: 89, channelTitle: "Pelangi", channelStbNumber: 142 }, { channelId: 90, channelTitle: "CCTV4", channelStbNumber: 334 }, { channelId: 91, channelTitle: "Asian Food Channel", channelStbNumber: 703 }, { channelId: 92, channelTitle: "Astro Arena", channelStbNumber: 801 }, { channelId: 93, channelTitle: "NTV7", channelStbNumber: 107 }, { channelId: 94, channelTitle: "BabyTV", channelStbNumber: 618 }, { channelId: 95, channelTitle: "TV 1", channelStbNumber: 101 }, { channelId: 96, channelTitle: "Astro Shuang Xing", channelStbNumber: 324 }, { channelId: 97, channelTitle: "TVi", channelStbNumber: 109 }, { channelId: 98, channelTitle: "TVB Classic", channelStbNumber: 305 }, { channelId: 99, channelTitle: "Kalaignar TV", channelStbNumber: 223 }, { channelId: 100, channelTitle: "Eve", channelStbNumber: 733 }, { channelId: 101, channelTitle: "Al Jazeera English", channelStbNumber: 513 }, { channelId: 102, channelTitle: "DMAX", channelStbNumber: 734 }, { channelId: 103, channelTitle: "TV 2", channelStbNumber: 102 }, { channelId: 104, channelTitle: "iView", channelStbNumber: 302 }, { channelId: 105, channelTitle: "Crime and Investigation Network", channelStbNumber: 732 }, { channelId: 106, channelTitle: "TV 3", channelStbNumber: 103 }, { channelId: 107, channelTitle: "TLC", channelStbNumber: 707 }, { channelId: 108, channelTitle: "CTI Asia", channelStbNumber: 316 }, { channelId: 109, channelTitle: "Celestial Movies", channelStbNumber: 322 }, { channelId: 111, channelTitle: "NHK World", channelStbNumber: 398 }, { channelId: 112, channelTitle: "History", channelStbNumber: 555 }, { channelId: 113, channelTitle: "Astro On Demand CH351", channelStbNumber: 351 }, { channelId: 114, channelTitle: "Astro On Demand CH353", channelStbNumber: 353 }, { channelId: 115, channelTitle: "8TV", channelStbNumber: 708 }, { channelId: 116, channelTitle: "Jaya TV", channelStbNumber: 221 }, { channelId: 118, channelTitle: "Astro TVIQ", channelStbNumber: 610 }, { channelId: 119, channelTitle: "Astro Best SD 1 (471)", channelStbNumber: 471 }, { channelId: 120, channelTitle: "Astro First SD 1 (482)", channelStbNumber: 482 }, { channelId: 121, channelTitle: "Astro First SD 2 (484)", channelStbNumber: 484 }, { channelId: 122, channelTitle: "Astro First SD 3 (485)", channelStbNumber: 485 }, { channelId: 123, channelTitle: "Astro First SD 4 (486)", channelStbNumber: 486 }, { channelId: 124, channelTitle: "Astro First SD 5 (488)", channelStbNumber: 488 }, { channelId: 125, channelTitle: "Astro First SD 7 (490)", channelStbNumber: 490 }, { channelId: 126, channelTitle: "Astro First SD 8 (491)", channelStbNumber: 491 }, { channelId: 127, channelTitle: "Astro Tutor TV PT3", channelStbNumber: 602 }, { channelId: 128, channelTitle: "Astro Tutor TV SPM", channelStbNumber: 603 }, { channelId: 129, channelTitle: "Astro Wah Lai Toi HD", channelStbNumber: 310 }, { channelId: 130, channelTitle: "Life Inspired HD", channelStbNumber: 728 }, { channelId: 131, channelTitle: "AXN HD", channelStbNumber: 721 }, { channelId: 132, channelTitle: "FX HD", channelStbNumber: 726 }, { channelId: 133, channelTitle: "One HD", channelStbNumber: 393 }, { channelId: 134, channelTitle: "Celestial Movies HD", channelStbNumber: 309 }, { channelId: 136, channelTitle: "Discovery Asia", channelStbNumber: 571 }, { channelId: 137, channelTitle: "Star World HD", channelStbNumber: 722 }, { channelId: 138, channelTitle: "Astro SuperSport 2 HD", channelStbNumber: 833 }, { channelId: 139, channelTitle: "Disney XD HD", channelStbNumber: 637 }, { channelId: 140, channelTitle: "National Geographic HD", channelStbNumber: 573 }, { channelId: 141, channelTitle: "FOX Sports HD", channelStbNumber: 832 }, { channelId: 142, channelTitle: "Astro PPV Movies HD (495)", channelStbNumber: 495 }, { channelId: 143, channelTitle: "HBO HD", channelStbNumber: 431 }, { channelId: 144, channelTitle: "History HD", channelStbNumber: 575 }, { channelId: 145, channelTitle: "Wai FM", channelStbNumber: 871 }, { channelId: 146, channelTitle: "Astro Best SD 4 (474)", channelStbNumber: 474 }, { channelId: 147, channelTitle: "Astro First SD 9 (492)", channelStbNumber: 492 }, { channelId: 148, channelTitle: "Astro Best HD 3 (473)", channelStbNumber: 473 }, { channelId: 149, channelTitle: "Al-Hijrah", channelStbNumber: 114 }, { channelId: 150, channelTitle: "Astro PPV Movies HD (497)", channelStbNumber: 497 }, { channelId: 151, channelTitle: "FOX Movies HD", channelStbNumber: 433 }, { channelId: 152, channelTitle: "Astro Best SD 6 (475)", channelStbNumber: 475 }, { channelId: 153, channelTitle: "Food Network HD", channelStbNumber: 727 }, { channelId: 154, channelTitle: "Astro SuperSport HD", channelStbNumber: 831 }, { channelId: 155, channelTitle: "Sky News HD", channelStbNumber: 532 }, { channelId: 156, channelTitle: "Astro Mustika HD", channelStbNumber: 134 }, { channelId: 157, channelTitle: "KIX HD", channelStbNumber: 729 }, { channelId: 158, channelTitle: "Astro Quan Jia HD", channelStbNumber: 308 }, { channelId: 159, channelTitle: "Star Vijay", channelStbNumber: 224 }, { channelId: 160, channelTitle: "Bernama TV", channelStbNumber: 502 }, { channelId: 161, channelTitle: "KBS World HD", channelStbNumber: 392 }, { channelId: 162, channelTitle: "Astro Hua Hee Dai HD", channelStbNumber: 332 }, { channelId: 163, channelTitle: "Astro SuperSport 4", channelStbNumber: 817 }, { channelId: 164, channelTitle: "Astro SuperSport 3 HD", channelStbNumber: 834 }, { channelId: 165, channelTitle: "Astro Maya HD", channelStbNumber: 135 }, { channelId: 166, channelTitle: "A-List", channelStbNumber: 456 }, { channelId: 167, channelTitle: "Astro Vinmeen HD", channelStbNumber: 231 }, { channelId: 168, channelTitle: "Astro Best SD 7 (478)", channelStbNumber: 478 }, { channelId: 169, channelTitle: "Astro Best SD 8 (479)", channelStbNumber: 479 }, { channelId: 170, channelTitle: "FOX Family Movies", channelStbNumber: 430 }, { channelId: 171, channelTitle: "Astro Best SD 5 (470)", channelStbNumber: 470 }, { channelId: 172, channelTitle: "Astro On Demand HD CH350", channelStbNumber: 350 }, { channelId: 173, channelTitle: "Astro Best SD 10 (477)", channelStbNumber: 477 }, { channelId: 174, channelTitle: "Astro PPV Movies HD (496)", channelStbNumber: 496 }, { channelId: 175, channelTitle: "Astro Best SD 2 (472)", channelStbNumber: 472 }, { channelId: 176, channelTitle: "Astro Box Office Movies Tayangan Hebat", channelStbNumber: 130 }, { channelId: 177, channelTitle: "Astro Box Office Movie Thangathirai", channelStbNumber: 241 }, { channelId: 178, channelTitle: "Astro BollyOne HD", channelStbNumber: 251 }, { channelId: 179, channelTitle: "HITS", channelStbNumber: 720 }, { channelId: 180, channelTitle: "FOX HD", channelStbNumber: 724 }, { channelId: 181, channelTitle: "Diva HD", channelStbNumber: 723 }, { channelId: 182, channelTitle: "Astro AEC HD", channelStbNumber: 306 }, { channelId: 183, channelTitle: "Astro Shuang Xing HD", channelStbNumber: 307 }, { channelId: 184, channelTitle: "FOX Action Movies", channelStbNumber: 434 }, { channelId: 185, channelTitle: "FYI", channelStbNumber: 736 }, { channelId: 186, channelTitle: "ZooMoo", channelStbNumber: 619 }, { channelId: 187, channelTitle: "Celestial Classic Movies", channelStbNumber: 321 }, { channelId: 188, channelTitle: "Astro Xi Yue HD", channelStbNumber: 300 }, { channelId: 189, channelTitle: "Golf Channel HD", channelStbNumber: 835 }, { channelId: 190, channelTitle: "tvN", channelStbNumber: 395 }, { channelId: 191, channelTitle: "Oh!K HD", channelStbNumber: 394 }, { channelId: 192, channelTitle: "Astro Go Shop", channelStbNumber: 118 }, { channelId: 193, channelTitle: "Astro Ria HD", channelStbNumber: 123 }, { channelId: 194, channelTitle: "WWE Network HD", channelStbNumber: 840 }, { channelId: 195, channelTitle: "Setanta Sports HD", channelStbNumber: 839 }, { channelId: 196, channelTitle: "WWE Network", channelStbNumber: 820 }, { channelId: 197, channelTitle: "Astro Cricket HD", channelStbNumber: 838 }, { channelId: 198, channelTitle: "HGTV", channelStbNumber: 731 }, { channelId: 199, channelTitle: "Nat Geo People HD", channelStbNumber: 725 }, { channelId: 200, channelTitle: "Star Chinese Channel", channelStbNumber: 315 }, { channelId: 202, channelTitle: "Astro Go Shop", channelStbNumber: 303 }, { channelId: 203, channelTitle: "TVB Jade", channelStbNumber: 326 }, { channelId: 204, channelTitle: "Classic Movies", channelStbNumber: 328 }, { channelId: 205, channelTitle: "Asian Action Channel", channelStbNumber: 327 }, { channelId: 206, channelTitle: "Every Good Game", channelStbNumber: 808 }, { channelId: 235, channelTitle: "Astro Arena HD", channelStbNumber: 802 }, { channelId: 236, channelTitle: "beIN Sports", channelStbNumber: 837 }, { channelId: 237, channelTitle: "Fox Sports News", channelStbNumber: 0 }, { channelId: 238, channelTitle: "Astro Best SD 9 (476)", channelStbNumber: 476 }, { channelId: 239, channelTitle: "Astro Best (467)", channelStbNumber: 467 }, { channelId: 240, channelTitle: "Astro Best SD 12 (468)", channelStbNumber: 468 }, { channelId: 241, channelTitle: "Astro SuperSport 4 HD", channelStbNumber: 836 }, { channelId: 242, channelTitle: "Astro Best SD 11 (469)", channelStbNumber: 469 }, { channelId: 243, channelTitle: "Fox Sports 2", channelStbNumber: 0 }, { channelId: 244, channelTitle: "Fox Sports 3", channelStbNumber: 0 }, { channelId: 245, channelTitle: "Oh! K", channelStbNumber: 0 }, { channelId: 246, channelTitle: "tvN - ID", channelStbNumber: 0 }, { channelId: 247, channelTitle: "Fox Sports", channelStbNumber: 0 }, { channelId: 250, channelTitle: "TARA HD", channelStbNumber: 108 }, { channelId: 251, channelTitle: "Boo", channelStbNumber: 404 }, { channelId: 252, channelTitle: "Aniplus(ID)", channelStbNumber: 0 }, { channelId: 253, channelTitle: "Aniplus(PH)", channelStbNumber: 0 }, { channelId: 254, channelTitle: "KBS World", channelStbNumber: 0 }, { channelId: 257, channelTitle: "tvN - PH", channelStbNumber: 0 }, { channelId: 258, channelTitle: "Kix360", channelStbNumber: 0 }, { channelId: 259, channelTitle: "Kix360", channelStbNumber: 0 }, { channelId: 260, channelTitle: "Thrill360", channelStbNumber: 0 }, { channelId: 261, channelTitle: "Thrill360", channelStbNumber: 0 }, { channelId: 262, channelTitle: "Comedy Central", channelStbNumber: 0 }, { channelId: 263, channelTitle: "K-Plus1", channelStbNumber: 0 }, { channelId: 264, channelTitle: "K-Plus2", channelStbNumber: 0 }, { channelId: 265, channelTitle: "Astro First SD 6 (489)", channelStbNumber: 489 }, { channelId: 266, channelTitle: "K-Plus", channelStbNumber: 0 }, { channelId: 267, channelTitle: "Aniplus", channelStbNumber: 0 }, { channelId: 268, channelTitle: "Celestial", channelStbNumber: 0 }, { channelId: 270, channelTitle: "Warner TV", channelStbNumber: 719 }, { channelId: 271, channelTitle: "Tara HD", channelStbNumber: 0 }, { channelId: 272, channelTitle: "Astro Warna HD", channelStbNumber: 124 }, { channelId: 274, channelTitle: "tvN Movies", channelStbNumber: 435 }, { channelId: 275, channelTitle: "Nadi KL17", channelStbNumber: 803 }, { channelId: 276, channelTitle: "Arena KL17 1", channelStbNumber: 804 }, { channelId: 277, channelTitle: "Arena KL17 2", channelStbNumber: 805 }, { channelId: 282, channelTitle: "Nadi KL17 - SD", channelStbNumber: 800 }, { channelId: 283, channelTitle: "Arena KL17 1", channelStbNumber: 799 }, { channelId: 284, channelTitle: "Arena KL17 2", channelStbNumber: 798 }];

*/

// Utility 
function getNearestHourDateTime(dateTimeStr) {
  return dateTimeStr ? moment(dateTimeStr).startOf('hour').format(API_DATE_FORMAT) : moment().startOf('hour').format(API_DATE_FORMAT)
}

function getMidnightDateTime(dateTimeStr) {
  return moment(dateTimeStr).endOf('day').format(API_DATE_FORMAT)
}

function getChannelWithNoProgrammes(sortedList) {

  let list = sortedList
    .slice(0, 20)
    .filter(channel => typeof channel.programmes == "undefined")
    .map(channel => channel.channelId)
    .join(',')

  return list
}

function setProgrammeRunTimeinMinutes(programmeList) {

  programmeList.forEach(programme => {
    let durationStr = programme.displayDuration.split(':');
    let minutes = Number(durationStr[0]) * 60 + Number(durationStr[1])

    programme['durationMinutes'] = minutes
  })
}

function sortProgrammeListByDateTime(programmeList) {

  return programmeList.sort((a, b) => {
    let momentA = moment(a.displayDateTime)
    let momentB = moment(b.displayDateTime)

    return moment(momentA).diff(momentB)
  })
}

function isProgrammeAvailable(list, ) {

}

// Initial State
const state = {
  channelList: [],
  sortOrder: -1,
  sortOn: 'channelTitle',
  fetching: false,
  fetched: false,

  timingFetching: false,
  timingFetched: false,

  programmeDate: getNearestHourDateTime(),

  errorMessage: ''
}

// // getters
const getters = {
  channelList: state => state.channelList,
  isChannelListFetching: state => state.fetching,
  isChannelListFetched: state => state.fetched,
  sortOrder: state => state.sortOrder,
  sortOn: state => state.sortOn,

  programmeDate: state => state.programmeDate
}

// // Mutations
const mutations = {

  [TYPES.FETCHING_CHANNEL_LIST](state) {
    state.fetching = true
    state.fetched = false
  },
  [TYPES.FETCHING_CHANNEL_LIST_SUCCESS](state, channelList) {
    state.fetching = false
    state.fetched = true
    state.channelList = channelList
  },
  [TYPES.FETCHING_CHANNEL_LIST_ERROR](state, errorMessage) {
    state.fetching = false
    state.fetched = false
    state.errorMessage = errorMessage
  },
  [TYPES.SAVE_SORTED_CHANNEL_LIST](state, { channelList, sortOn, sortOrder }) {
    state.channelList = channelList
    state.sortOn = sortOn
    state.sortOrder = sortOrder
  },

  [TYPES.FETCHING_CHANNEL_LIST_PROGRAMME](state) {
    state.timingFetching = true
    state.timingFetched = false
  },
  [TYPES.FETCHING_CHANNEL_LIST_PROGRAMME_SUCCESS](state, channelList) {
    state.timingFetching = false
    state.timingFetched = true
    state.channelList = channelList
  },
  [TYPES.FETCHING_CHANNEL_LIST_PROGRAMME_ERROR](state, errorMessage) {
    state.timingFetching = false
    state.timingFetched = false
    state.errorMessage = errorMessage
  },

  [TYPES.SET_PROGRAMME_DATE](state, programmeDate) {
    state.programmeDate = programmeDate
  }

}

// Actions
const actions = {

  /**
   * Fetches All Channels
   */
  fetchingChannelList({ commit }) { commit(TYPES.FETCHING_CHANNEL_LIST) },

  /**
   * Returns Array of all Channel Id's
   * @param {store} vuex store
   * @return {Object} promise
   */
  fetchChannelIdList({ state }) {

    let channelIdList = state.channelList.map(channel => channel.channelId)
    return channelIdList
  },

  /**
   * Cleans the Programme response and stores it in the Vuex Store
   * @param {object} store - vuex store
   * @param {array} programmes - Raw Programe Details response
   */
  setProgrammeTimingList({ state, commit, getters, dispatch }, programmes) {

    // 1.Group the raw programmes response according to the channel they belong
    let groupedProgrammeList = _.chain(programmes)
      .groupBy('channelId')
      .toPairs()
      .value().reduce((prev, val) => {
        prev[val[0]] = val[1]
        return prev
      }, {})

    // 2.Iterate over the Grouped List and add it to the respective Channels data in the Main ChannelList Vuex Store
    let channelList = [].concat(state.channelList)
    Object.keys(groupedProgrammeList).forEach(key => {

      let channelID = key;
      let channelData = channelList.find(channel => channel.channelId == key)

      let programmes = groupedProgrammeList[channelID] && groupedProgrammeList[channelID].length == 0 ? [{ programmeTitle: "NO DATA" }] : groupedProgrammeList[channelID]

      setProgrammeRunTimeinMinutes(programmes)
      channelData['programmes'] = programmes // setProgrammeRunTimeinMinutes(programmes)
    })

    commit(TYPES.FETCHING_CHANNEL_LIST_PROGRAMME_SUCCESS, channelList)
  },

  async fetchProgrammeTimings({ state, commit, getters, dispatch }, channelList) {
    debugger
    let channelIDListWithNoProgramme = channelList.filter(id => {
      let channelData = state.channelList.find(channel => channel.channelId == id)
      return typeof channelData['programmes'] == "undefined"
    }).join(',')

    let api = `${PATH}${API_ENDPOINTS.CHANNEL_TV_GUIDE}?channelId=${channelList}&periodStart=${getters.programmeDate}&periodEnd=${getMidnightDateTime(getters.programmeDate)}`
    let response = await fetch(api);
    let data = JSON.parse(await response.json())

    if (data.responseCode != "200") {
      commit(TYPES.FETCHING_CHANNEL_LIST_PROGRAMME_ERROR, data.responseMessage)
    } else {
      // Set Programme Data onto the main Channel List Store
      dispatch('setProgrammeTimingList', data.getevent)
    }

  },

  /**
   * Returns Array of all Channel Id's
   * @param {object} store - vuex store
   */
  async fetchProgrammeTimingList({ state, commit, getters, dispatch }) {

    commit(TYPES.FETCHING_CHANNEL_LIST_PROGRAMME)

    let channelIdList = await dispatch('fetchChannelIdList')
    let channelList = getChannelWithNoProgrammes(state.channelList)

    // If List do not have any data needed to be fetched then commit 'FETCHING_CHANNEL_LIST_PROGRAMME_SUCCESS'
    if (!channelList) {
      commit(TYPES.FETCHING_CHANNEL_LIST_PROGRAMME_SUCCESS, [].concat(state.channelList))
      return;
    }

    let api = `${PATH}${API_ENDPOINTS.CHANNEL_TV_GUIDE}?channelId=${channelList}&periodStart=${getters.programmeDate}&periodEnd=${getMidnightDateTime(getters.programmeDate)}`
    let response = await fetch(api);
    let data = JSON.parse(await response.json())

    if (data.responseCode != "200") {
      commit(TYPES.FETCHING_CHANNEL_LIST_PROGRAMME_ERROR, data.responseMessage)
    } else {
      // Set Programme Data onto the main Channel List Store
      dispatch('setProgrammeTimingList', data.getevent)
    }
  },

  /**
   * Fetches All the channels
   * @param {object} store - vuex store
   */
  async fetchChannelList({ state, commit, getters, dispatch }) {

    commit(TYPES.FETCHING_CHANNEL_LIST)
    let response = await fetch([`${PATH}${API_ENDPOINTS.CHANNEL_LIST}`]);
    // Delay for showing loading screen
    // setTimeout(function() {
    // let response = await fetch(['./static/channels.json']);
    let data = JSON.parse(await response.json())
    if (data.responseCode != "200") {
      commit(TYPES.FETCHING_CHANNEL_LIST_ERROR, data.responseMessage)
    } else {
      commit(TYPES.FETCHING_CHANNEL_LIST_SUCCESS, data.channels)
      // Fetching Programme data
      // dispatch('fetchProgrammeTimingList')
    }
    // }, 2000)
  },

  /**
   * Fetches All the channels
   * @param {object} store - vuex store
   * @param {string} sortOn - parameter to sort on
   * @param {number} sortOrder-  sort order
   */
  sortChannelList({ state, commit, dispatch }, { sortOn, sortOrder }) {
    let channelList = [].concat(state.channelList)

    let sortedChannelList = channelList.sort((a, b) => {
      let channelA = typeof a[sortOn] == "number" ? a[sortOn] : a[sortOn].toLowerCase().trim()
      let channelB = typeof b[sortOn] == "number" ? b[sortOn] : b[sortOn].toLowerCase().trim()
      return (channelA > channelB) ? sortOrder : (channelA < channelB) ? -sortOrder : 0
    })

    commit({
      type: TYPES.SAVE_SORTED_CHANNEL_LIST,
      channelList: sortedChannelList,
      sortOn,
      sortOrder
    })

    dispatch('fetchProgrammeTimingList')

  },
  /**
   * Fetches All the channels
   * @param {string} date - programme date
   * @param {number} sortOrder-  sort order
   */
  setProgrammeDate({ state, commit, dispatch }, date) {
    date = getNearestHourDateTime(date)

    commit(TYPES.SET_PROGRAMME_DATE, date)
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
