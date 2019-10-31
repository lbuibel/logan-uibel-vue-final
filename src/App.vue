<template>
  <v-app>
    <v-content>
      <Header />
      <div id="nav">
        <router-link to="/about.vue">Home</router-link>
        <router-link to="/Home.vue">About</router-link>
      </div>

      <v-btn @click="airSpeeders">Air Speeders</v-btn>
      <v-btn @click="wheeledVehicles">Wheeled Vehicles</v-btn>
      <v-btn @click="repulsorcraft">Repulsocrafts</v-btn>

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
