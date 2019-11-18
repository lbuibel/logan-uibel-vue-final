<template>
<div>
    <h1 class="pa-5 mb-2">A Breif Star Wars History</h1>
  <v-timeline class="pa-5 mb-2">
    <v-timeline-item
      v-for="(movie, i) in movieArray"
      :key="i"
      :color="movie.color"
      small
    >
      <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold`"
          v-text="movie.release_date"
        ></span>
      </template>
      <div class="py-4">
        <h2 :class="`headline font-weight-light mb-4`" >{{ movie.title }}</h2>
        <div>
          {{ movie.opening_crawl }}
        </div>
      </div>
    </v-timeline-item>
    <v-btn text disabled @click="getMovies"></v-btn>
  </v-timeline>
</div>
</template>

<script>
import axios from "axios";

  export default {
    data: () => ({
      movieArray: [],
    }),
    computed: {
       getMovies () {
        return axios.get('https://swapi.co/api/films').then
        (response => {
            let newArray = response.data.results
            this.movieArray = newArray
            // let movieArray = array.map(element => element.title)
        }).catch(error => console.log(error))
        } 
    }
  }
</script>