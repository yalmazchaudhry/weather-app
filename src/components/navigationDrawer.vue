<template>
  <v-container>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
    >
    
      <v-list-item class="px-2">
        <div class="d-flex flex-column">
        <v-list-item-icon>
          <v-icon>mdi-weather-dust</v-icon>
          </v-list-item-icon>
          
          
        </div>
          <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      
    <div class="d-flex flex-column align-start  mt-9">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
      <a  href="#" class="text-decoration-none mb-4 grey lighten-3 rounded-xl py-2  black--text" v-bind="attrs"
          v-on="on">
      <div class="d-flex flex-column   ">
        <v-icon class="d-flex justify-start ml-2">mdi-weather-partly-cloudy</v-icon>
        <p class="text-subtitle-2 mt-2">Weather</p>
      </div></a></template><v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list></v-menu>
      <a href="#" class="text-decoration-none mb-4 grey lighten-3 rounded-xl pa-2  black--text">
      <div class="d-flex flex-column ">
        <v-icon class="d-flex justify-start ml-2">mdi-menu</v-icon>
        <p class="text-subtitle-2 mt-2">Cities</p>
      </div></a>
      
    </div>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
  export default {
    name: 'navigationDrawer',

    data: () => ({
      drawer: true,
        mini: true,
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),

    // data () {
    //   return {
    //     drawer: true,
    //     mini: true,
    //   }
    // },
  }
</script>
