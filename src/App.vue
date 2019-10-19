<template>
  <v-app>
    <v-content>
      <Header/>
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/">About</router-link>
      </div>

          <v-btn @click="getData">Get Data</v-btn>
          <h1> {{ fetchedName }} </h1>

          <v-btn @click="getPokemon">Get Music</v-btn>

      <Footer/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Footer from './components/Footer'
import Header from './components/Header'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Footer,
    Header,
  },
  data: () => {
    return {
      fetchedName: ""
    }
  },
  methods: {
    getData () {
      return axios.get('https://swapi.co/api/people').then
      (response => {
        console.log(response.data.results)
        this.fetchedName = response.data.results[0].name
      }).catch(error => console.log(error))
      console.log('Data retrieved')
    },
    getPokemon () {
      return axios.get('https://pokeapi.co/api/v2/pokemon').then
      (response => {
        console.log(response.data.results)
        this.fetchedName = response.data.results[0].name
      }).catch(error => console.log(error))
      console.log('Data retrieved')
    },
  }
}
</script>
