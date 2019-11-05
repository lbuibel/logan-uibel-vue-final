<template>
  <v-app>
    <v-content>
      <Header/>


      <router-view></router-view>


      <Footer />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Footer from "./components/Footer";
import Header from "./components/Header";
import axios from "axios";
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
  }
};






</script>

<style scoped>
  #app {
    background-color: #323131;
    padding: 2%;
    color: white;
  }
  .container {
    margin-bottom: 6%;
  }
</style>
