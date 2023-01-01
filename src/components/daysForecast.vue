<template>
    <v-container class="blue lighten-4 rounded-lg">
      <div class="d-flex flex-column">
<p @click="daysName()">Weekly Forecast</p>
<div class="d-flex justify-space-between">
  <p class="mt-4">{{ days(forecast.list[0].dt) }}</p>
  <div class="d-flex align-center">
  <v-img
              max-height="60"
              max-width="80"
              :src="`https://openweathermap.org/img/wn/${forecast.list[0].weather[0].icon}@2x.png`"
            ></v-img><p class="ma-0 ml-n2">{{ forecast.list[0].weather[0].description }}</p></div>
  <p class="mt-4 ">{{ forecast.list[0].main.temp }}°</p>
</div>
<div class="d-flex justify-space-between">
  <p class="mt-4">{{ days(forecast.list[8].dt) }}</p>
  <div class="d-flex align-center">
  <v-img
              max-height="60"
              max-width="80"
              :src="`https://openweathermap.org/img/wn/${forecast.list[8].weather[0].icon}@2x.png`"
            ></v-img><p class="ma-0 ml-n2">{{ forecast.list[8].weather[0].description }}</p></div>
  <p class="mt-4">{{ forecast.list[8].main.temp }}°</p>
</div>
<div class="d-flex justify-space-between">
  <p class="mt-4">{{ days(forecast.list[16].dt) }}</p>
  <div class="d-flex align-center">
  <v-img
              max-height="60"
              max-width="80"
              :src="`https://openweathermap.org/img/wn/${forecast.list[16].weather[0].icon}@2x.png`"
            ></v-img>
            <p class="ma-0 ml-n2">{{ forecast.list[16].weather[0].description }}</p>
          </div>
  <p class="mt-4 ">{{ forecast.list[16].main.temp }}°</p>
</div>
<div class="d-flex justify-space-between">
  <p class="mt-4">{{ days(forecast.list[24].dt) }}</p>
  <div class="d-flex align-center">
  <v-img
              max-height="60"
              max-width="80"
              :src="`https://openweathermap.org/img/wn/${forecast.list[24].weather[0].icon}@2x.png`"
            ></v-img><p class="ma-0 ml-n2">{{ forecast.list[24].weather[0].description }}</p></div>
  <p class="mt-4 ">{{ forecast.list[24].main.temp }}°</p>
</div>
<div class="d-flex justify-space-between">
  <!-- <p class="mt-4">{{ days[0].dt == undefined ? 'hi i am undefined' : days[0].dt }}</p> -->
  <p class="mt-4">{{ days(forecast.list[32].dt)  }}</p>
  <div class="d-flex align-center">
  <v-img
              max-height="60"
              max-width="80"
              :src="`https://openweathermap.org/img/wn/${forecast.list[32].weather[0].icon}@2x.png`"
            ></v-img><p class="ma-0 ml-n2">{{ forecast.list[32].weather[0].description }}</p></div>
  <p class="mt-4">{{ forecast.list[32].main.temp }}°</p>
</div>

      </div>
    </v-container>
  </template>
  
  <script>
  import {store} from '../store'

    export default {
      name: 'daysForecast',
      data(){
        return{
          
        }
      },
//       updated: function() {
//   this.$options.computed = {
//      demo2: function() {
//        return store.state.foreCast
//      }
//   }
// } ,   
     
computed:{
 forecast(){
  return store.state.foreCast;
},
// days(){
//   var newArray=[]
//   var days=[
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ]
//   for(let i=0; i<store.state.foreCast.list.length; i++){
//     if(i%8==0){
//       let newDate= new Date(store.state.foreCast.list[i].dt*1000);
//       let day = days[newDate.getDay()]
//       store.state.foreCast.list[i].dt=day
//       newArray.push(this.forecast.list[i])
//     }

//   }
//   return newArray
// }

},
      
methods:{
  daysName(){
    console.log(this.days[0].dt)
  },

  days(dt){
  
  
    var days=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
      let newDate= new Date(dt*1000);
      let day = days[newDate.getDay()]
      
    

  
  return day
}

},
 


    }
    
  </script>