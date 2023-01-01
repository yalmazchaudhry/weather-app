<template>
  <v-app>
   <v-container fluid>
    <v-row>
      <v-col class="col-sm-2 col-3 "><navigationDrawer></navigationDrawer></v-col>
      <v-col class="col-md-6 col-sm-9  col-9"><todayForecast></todayForecast></v-col>
      <v-col class="col-md-3 hidden-sm-and-down"><daysForecast></daysForecast></v-col>
    </v-row>
    <div class="hidden-md-and-up mt-2">
    <daysForecast />
  </div>
   </v-container>
  </v-app>
</template>

<script>
import navigationDrawer from './components/navigationDrawer.vue';
import todayForecast from './components/todayForecast.vue';
import daysForecast from './components/daysForecast.vue';
import {store} from './store'

export default {
  components: { 
    navigationDrawer,
    todayForecast,
    daysForecast,
  
  },
  name: 'App',
  beforeCreate(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  function showPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  var Longitude = position.coords.longitude;
  var Latitude = position.coords.latitude;
  store.dispatch("getCurrentWeather", [Latitude, Longitude])
}
},
computed:{

},
  
data(){
      return{
        Latitude:'',
        Longitude: '',
        
    } }
};
</script>
