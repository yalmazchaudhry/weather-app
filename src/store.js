import Vue from "vue";
import Vuex from "vuex";
const API_KEY = "267d24889787f4dc4fd11210ad9cc7fb";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    data: {},
    foreCast: {},
  },

  actions: {
    getCurrentWeather(context, cords) {
      console.log(typeof cords, cords.length, cords, "cordsssssss");

      if (cords.length == 2) {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${cords[0]}&lon=${cords[1]}&units=metric&appid=${API_KEY}`
        )
          .then((response) => response.json())
          .then((data) => {
            console.log("dhfjdhj");
            console.log(data);

            context.commit("getCurrentWeather", data);
          });
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${cords[0]}&lon=${cords[1]}&units=metric&appid=${API_KEY}`
        )
          .then((response) => response.json())
          .then((data) => {
            console.log("dhfjdhj");
            console.log(data);
            context.commit("getForecast", data);
          });
      } else {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cords}&units=metric&appid=${API_KEY}`
        )
          .then((response) => response.json())
          .then((data) => {
            console.log("dhfjdhj");
            console.log(data);

            context.commit("getCurrentWeather", data);
          });
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${cords}&units=metric&appid=${API_KEY}`
        )
          .then((response) => response.json())
          .then((data) => {
            console.log("dhfjdhj");
            console.log(data);
            context.commit("getForecast", data);
          });
      }
    },
  },
  mutations: {
    getCurrentWeather(state, data) {
      state.data = data;
    },
    getForecast(state, data) {
      state.foreCast = data;
    },
  },
});
