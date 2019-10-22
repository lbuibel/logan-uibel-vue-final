<template>
  <v-app>
    <v-content>
      <Header />
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/">About</router-link>
      </div>

      <v-btn @click="getData">Get Data</v-btn>
      <v-btn @click="moreData">More Data</v-btn>

      <vehicle-grid :vehicles="vehicles"></vehicle-grid>

      <Footer />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Footer from "./components/Footer";
import Header from "./components/Header";
import axios from "axios";

// import { starships } from './assets/starships'
import { vehicles } from "./assets/vehicles";
import { films } from "./assets/films";

import VehicleGrid from "./components/VehicleGrid";

export default {
  name: "App",
  components: {
    HelloWorld,
    Footer,
    Header,
    VehicleGrid
  },
  data: () => {
    return {
      vehicles,
      airspeeder: vehicles.filter(vehicles => vehicles.vehicle_class == 'airspeeder')
      // starships,
    };
  },
  methods: {
    getData() {
      console.log(vehicles);
    },
    moreData() {
      console.log(films);
    },
  }
};

const vehicleTypes = vehicles.map(vehicles => vehicles.vehicle_class)
console.log(vehicleTypes)

const airspeeder = vehicles.filter(vehicles => vehicles.vehicle_class == 'airspeeder')
console.log(airspeeder)



</script>
