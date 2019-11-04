<template>
  <v-app>
    <v-content>
      <Header />
      <div id="nav">
        <!-- <router-link to="/about.vue">Home</router-link>
        <router-link to="/Home.vue">About</router-link> -->
      </div>

     
      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn
            color="primary"
            dark
            v-on="on"
            class="ma-2"
            >
            Vehicle Type
            </v-btn>
          </template>
          <v-list>
          <v-list-item @click="all">
            <v-list-item-title>All</v-list-item-title>
          </v-list-item>
            <v-list-item @click="airSpeeders">
            <v-list-item-title>Air Speeders</v-list-item-title>
          </v-list-item>
          <v-list-item @click="wheeledVehicles">
            <v-list-item-title>Wheeled Vehicles</v-list-item-title>
          </v-list-item>
          <v-list-item @click="repulsorcraft">
            <v-list-item-title>Repulsocrafts</v-list-item-title>
          </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <vehicle-grid :vehicles="array"></vehicle-grid>
  

      <Footer />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Footer from "./components/Footer";
import Header from "./components/Header";
import axios from "axios";

import { vehicles } from "./assets/vehicles";
import { films } from "./assets/films";

import VehicleGrid from "./components/VehicleGrid";

export default {
  name: "App",
  components: {
    HelloWorld,
    Footer,
    Header,
    VehicleGrid,
  },
  data: () => {
    return {
      array: vehicles,
    };
  },
  methods: {
    getInfo () {
      return axios.get('https://swapi.co/api/people').then
      (response => {
        console.log(response.data.results[0].name)
        this.fetchedName = response.data.results[0].name
      }).catch(error => console.log(error))
      console.log('Data retrieved')
    },
    airSpeeders () {
      this.array = vehicles.filter(vehicles => vehicles.vehicle_class == 'airspeeder')
    },
    wheeledVehicles () {
      this.array= vehicles.filter(vehicles => vehicles.vehicle_class == 'wheeled')
    },
    repulsorcraft  () {
      this.array= vehicles.filter(vehicles => vehicles.vehicle_class == 'repulsorcraft')
    },
    all () {
      this.array = vehicles
    }
  }
};






</script>

<style scoped>
  #app {
    background-color: #323131;
    padding: 2%;
  }
  .container {
    margin-bottom: 6%;
  }
</style>
