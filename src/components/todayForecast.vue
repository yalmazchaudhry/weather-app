<template>
    <v-container  fluid class="blue lighten-4 rounded-lg d-flex flex-column">
      <div>
        <v-text-field
            placeholder="Search for cities"
            outlined
            dense
            rounded-xl
            width="10px"
            color="blue lighten-1"
            background-color="#F5F5F5"
            append-icon="mdi-card-search"
            v-model="search"
            @change="searchWeather(search)"
          >
        </v-text-field>
      </div>
      <div class="d-flex justify-space-between mb-5">
        <div  class="d-flex flex-column justify-space-between">
          <div>
            <h1 class="ma-0">{{ currentWeather.name }}</h1>
            <p class="ma-0 text-caption">Chance of rain: 0%</p>
            <p class="text-caption">Last Updated:{{ realTime(currentWeather.dt) }}</p> 
          </div>
        <div><h1 class="mt-10">{{ currentWeather.main.temp == null ? '-' : currentWeather.main.temp}} °</h1></div>
        </div>
        <v-img
              max-height="60"
              max-width="120"
              :src="`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`"
            ></v-img>
                   <!-- <v-icon size="150">mdi-white-balance-sunny</v-icon> -->
      </div>
      <div class="d-flex flex-column">
        <p>Today's Forecast</p>
        <div class="d-flex flex-wrap justify-space-between">
        <div class="d-flex flex-column align-center justify-space-between">
          <p>{{ realTime(forecast.list[0].dt) }}</p>
          <v-img
              max-height="60"
              max-width="120"
              :src="`https://openweathermap.org/img/wn/${forecast.list[0].weather[0].icon}@2x.png`"
            ></v-img>
          <p>{{ forecast.list[0].main.temp == null ? '' : forecast.list[0].main.temp }}°</p>
        </div>
        <div class="d-flex flex-column align-center justify-space-between">
          <p>{{ realTime(forecast.list[1].dt) }}</p>
          <v-img
              max-height="60"
              max-width="120"
              :src="`https://openweathermap.org/img/wn/${forecast.list[1].weather[0].icon}@2x.png`"
            ></v-img>
          <p>{{ forecast.list[1].main.temp == null ? '' : forecast.list[1].main.temp }}°</p>
        </div>
        <div class="d-flex flex-column align-center justify-space-between">
          <p>{{ realTime(forecast.list[2].dt) }}</p>
          <v-img
              max-height="60"
              max-width="120"
              :src="`https://openweathermap.org/img/wn/${forecast.list[2].weather[0].icon}@2x.png`"
            ></v-img>
          <p>{{ forecast.list[2].main.temp==null ? '' : forecast.list[2].main.temp }}°</p>
        </div>
        <div class="d-flex flex-column align-center justify-space-between">
          <p>{{ realTime(forecast.list[3].dt) }}</p>
          <v-img
              max-height="60"
              max-width="120"
              :src="`https://openweathermap.org/img/wn/${forecast.list[3].weather[0].icon}@2x.png`"
            ></v-img>
          <p>{{ forecast.list[3].main.temp == null ? '' : forecast.list[3].main.temp }}°</p>
        </div>
        <div class="d-flex flex-column align-center justify-space-between">
          <p>{{ realTime(forecast.list[4].dt) }}</p>
          <v-img
              max-height="60"
              max-width="120"
              :src="`https://openweathermap.org/img/wn/${forecast.list[4].weather[0].icon}@2x.png`"
            ></v-img>
          <p>{{ forecast.list[4].main.temp == null ? '' : forecast.list[4].main.temp }}°</p>
        </div>
        <div class="d-flex flex-column align-center justify-space-between">
          <p>{{ realTime(forecast.list[5].dt) }}</p>
          <v-img
              max-height="60"
              max-width="120"
              :src="`https://openweathermap.org/img/wn/${forecast.list[5].weather[0].icon}@2x.png`"
            ></v-img>
          <p>{{ forecast.list[5].main.temp == null ? '' : forecast.list[5].main.temp }}°</p>
        </div>
        </div>
      </div>
      <div class="d-flex justify-space-around">
        <div>
        <div class="d-flex flex-column align-start">
        <p>Air Conditions</p>
        <p class="ma-0"><v-icon>mdi-thermometer</v-icon>Real Feel</p>
        <h1>{{ currentWeather.main.feels_like }}°</h1>
        </div>
        <div class="d-flex flex-column align-start mt-2">
        <p class="ma-0"><v-icon >mdi-water</v-icon>Humidity</p>
        <h1 class="ml-4 ma-0">{{ currentWeather.main.humidity }}%</h1>
        </div></div>
        <div>
        <div class="d-flex flex-column align-start mt-8">
      
        <p class="ma-0"><v-icon>mdi-weather-windy</v-icon>Wind</p>
        <h1>{{ currentWeather.wind.speed }} km/h</h1>
        </div>
        <div class="d-flex flex-column align-start mt-2">
        <p class="ma-0"><v-icon >mdi-weather-sunny</v-icon>Mian</p>
        <h1 class=" ml-4 ma-0">{{ currentWeather.weather[0].description }}</h1>
        </div></div>
        
        
      </div>
    </v-container>
  </template>

  <script>
  
import {store} from '../store'
    export default {
      name: 'todayForecast',
      data(){
return {
  search:'',
}
      },
  
      computed:{
        
currentWeather(){
  return store.state.data;
},
forecast(){
  return store.state.foreCast;
},


},
methods:{
  realTime(dt){
  let unix_timestamp = dt;
// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
var date = new Date(unix_timestamp * 1000);
// Hours part from the timestamp
var hours = date.getHours();
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
// console.log(formattedTime);

return formattedTime
},
searchWeather(key){
  store.dispatch("getCurrentWeather", key)

}
}
    }
  </script>
  <style>

</style>