<template>
  <v-app>
    <v-content>
      <Header />
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/">About</router-link>
      </div>

      <v-btn @click="getData">Get Data</v-btn>
      <v-btn @click="changeFile">Star Fighters</v-btn>
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

// import { starships } from './assets/starships'
import { vehicles } from "./assets/vehicles";
import { starships } from "./assets/starships"
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
      airspeeder: vehicles.filter(vehicles => vehicles.vehicle_class == 'airspeeder'),
      fetchedName: ''
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
    getInfo () {
      return axios.get('https://swapi.co/api/people').then
      (response => {
        console.log(response.data.results[0].name)
        this.fetchedName = response.data.results[0].name
      }).catch(error => console.log(error))
      console.log('Data retrieved')
    },
    changeFile () {
      this.array = starships
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



const vehicleTypes = vehicles.map(vehicles => vehicles.vehicle_class)
console.log(vehicleTypes)

const airspeeder = vehicles.filter(vehicles => vehicles.vehicle_class == 'airspeeder')
console.log("url " + airspeeder[0].url)
////////////////////////////////////////////////////////////

function getCharNumber(charURL) {
  let end = charURL.lastIndexOf("/");
  let charID = charURL.substring(end - 2, end);
  if (charID.indexOf("/") !== -1) {
    return charID.slice(1, 2);
  } else {
    return charID;
  }
}

let idNumber = getCharNumber(vehicles[2].url)
console.log("new number " + idNumber)

let imgSource = `https://starwars-visualguide.com/assets/img/vehicles/${idNumber}.jpg`;
console.log("img source " + imgSource)


////////////////////////////////////////////////////////////////

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
