<template>
    <div class="loader__view">
        <div class="loader__message">
        
            <h2 v-show="isChannelListFetching">Loading Astro Channels.....</h2>
            <h2 v-show="isChannelListFetched">
			<div>Loaded {{channelList.length}} Channels</div>

			<button>
				 <router-link to="/channelList" >Show Programme Guide</router-link> 
			</button>
		</h2>
        </div>
    </div>
</template>
<script>
/*eslint-disable*/
import { mapGetters} from 'vuex'
import router from './../router'

export default {
  name: 'loader',
  data () {
    return {
    }
  },
  computed:{
  	...mapGetters(['isChannelListFetching','isChannelListFetched','channelList'])
  },
  watch:{
  	isChannelListFetched(oldVal,newVal){
  		// automatically route
  		// setTimeout(()=>{
  		// 	router.push({ name: name })
  		// },1000)
  	}
  }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loader__view{
	text-align: center
}
.loader__message{margin:100px auto;}
.loader__view button{
background-color: #e63161;
    border: 2px solid #f16187;
    margin: 20px 10px;
    padding: 10px 20px;
}
.loader__view button a{color: #fcfcfc;text-decoration: none;}
</style>
