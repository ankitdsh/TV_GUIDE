<template>
    <div ref="$overlay" @click.self="onOverlayClick($event)" class="channel__details__container">
        <div class="channel__details__box">
            <div class="channel__details__header">
                <div class="channel__logo"><img :src="imageURL"/></div>
                <div class="channel__name">{{channelDetails.channelTitle}}</br><span class="channel__language">{{channelDetails.channelLanguage}}</span></div>
                <div class="channel__id">Channel No.{{channelDetails.channelStbNumber}}</div>
                <div class="close" @click="onCloseClick">Close</div>
            </div>
            <div class="channel__details__body">
                <h2>Description:-</h2>
                <sub>Type:{{channelDetails.channelCategory}}</sub>
                <p> {{channelDetails.channelDescription}}</p>
            </div>
        </div>
    </div>
</template>
<script>
/*eslint-disable*/
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'channel-details',
  data() {
    return {
      imageURL:""
    }
  },

  computed: {
    ...mapGetters(['channelDetails']),

  },
  created(){
    this.getChannelLogo()
  },
  mounted() {

  },
  methods: {
    ...mapActions(['clearChannelDetails','fetchChannelLogo']),
    onOverlayClick(e){
      // if(this.$refs.$overlay == e.target){
        this.onCloseClick()
      // }
    },
  	onCloseClick(){
      this.$store.dispatch('clearChannelDetails')
  	},
    async getChannelLogo(){
      this.imageURL = await this.$store.dispatch('fetchChannelLogo')
    }

  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>.channel__details__container {
    position: fixed;
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(15, 15, 15, 0.74);
}

.channel__details__box {
    transform: translateX(0vw);
    transition: 1s 0s linear;
    position: absolute;
    top: 10vh;
    left: 5vw;
    width: 90vw;
    height: 80vh;
    background: rgba(227, 227, 227, 0.9);
}

.channel__details__header {
    display: flex;
    flex-direction: row;
    /*    justify-content: flex-start;
    align-items: center;*/
    height: 60px;
    background-color: #000000;
    color: #448fe0;
}

.channel__logo img {
    height: 100%;
}

.channel__details__header .channel__logo {
    flex: 0 0 120px;
    margin-right: 20px;
    width: 120px;
}

.channel__details__header .channel__name {
    flex: 2 0 120px;
    align-self: center;
}

.channel__details__header .channel__language {
    font-size: 0.7em;
    color: #aeaeae;
}

.channel__details__header .channel__id {
    flex: 1 0 50px;
    align-self: center;
}

.channel__details__header .close {
    flex: 0 0 50px;
    cursor: pointer;
    align-self: center;
    margin-left: 20px;
}


.channel__details__body {
    padding: 15px;
    display: block;
    height: calc(80vh - 60px);
    overflow-y: scroll;
}

.channel__details__body::-webkit-scrollbar {
    display: none;
}

</style>
