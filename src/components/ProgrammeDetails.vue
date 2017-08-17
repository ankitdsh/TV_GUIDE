<template>
    <div class="programme__details__view" >
    
    <div v-if="programmeDetails">
      <div class="programme__header">
        <div class="channel__name">{{programmeDetails.programmeTitle}}</div>
        <div class="channel__name">{{programmeDetails.genre}}</div>
      </div>
      <div class="programme__header">
        <div class="channel__name">{{programmeDetails.displayDateTime}}</div>
        <div class="channel__name">{{programmeDetails.durationMinutes}} Mins</div>
      </div>


      <div class="programme__content">
        <div class="channel__logo"><img style="width: 200px;" :src="programmeDetails.epgEventImage"/></div>
        <p class="channel_description">{{programmeDetails.shortSynopsis}}</p>
      </div>

      <div class="programme__footer">

        <div class="channel__name">{{programmeDetails.subGenre}}</div>
        <div class="channel__name">{{programmeDetails.actors}}</div>
        <div class="channel__name">{{programmeDetails.directors}}</div>
       
      </div>
    </div>
    <div v-else>
      NO DATA FOUND
    </div>
    </div>
</template>
<script>
/*eslint-disable*/
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'programme-details-popup',
  props:['programmeDetails','channelDetails'],
  data() {
    return {
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.programme__details__view{
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 300px;
    /* border: 2px solid; */
    background: #333;
    height: 200px;
    font-size: 0.7em;
    overflow-y: scroll;
    color: #5087f3;
    padding: 5px;
}
.programme__details__view::-webkit-scrollbar { 
    display: none; 
}

.programme__header{     display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #252222;
    color: white;}

    .programme__content{   
     display: flex;
    flex-direction: column;}

</style>
