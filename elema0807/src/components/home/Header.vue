<template>
    <div class="headTop">
        <router-link class="locationAddress" to="/home/address">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-dingwei"></use>
            </svg>
            <span class="address">{{address}}</span>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sanjiao"></use>
            </svg>
        </router-link> 
    </div>
</template>

<script>
import { getAddressInfo } from '../../services/homedata.js'
import Vuex from 'vuex'
export default {
   data(){
		return {
			address: ''
		}
	},
	computed: {
		...Vuex.mapState({
			location: state=>state.location.locValue
		})
	},
	methods: {
		getData(){
			let {longitude, latitude} = this.location;
			getAddressInfo(latitude, longitude)
			.then(result=>{
				this.address = result;
			})
		}
	},
	watch: {
		location: {
			handler(){
				console.log('请求了');
				this.getData();
			},
			deep: true
		}
	} 
};
</script>

<style>

.headTop {
  background-image: linear-gradient(90deg, #0af, #0085ff);
  color: #fff;
  padding: 10px 14px 0 14px;
  height: 35px;
  line-height: 35px;
}
.locationAddress {
  width: 60%;
  font-weight: 700;
  display: inline-block;
  display: flex;
  align-items: center;
}
.locationAddress svg:nth-child(1) {
  width: 20px;
  height: 22px;
}
.address {
  font-size: 16px;
  max-width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 900;
  color: #fff;
}
</style>
