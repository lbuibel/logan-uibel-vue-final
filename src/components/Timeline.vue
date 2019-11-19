<template>
<div>
    <h1 class="pa-5 mb-2 text-center">A Breif Star Wars History</h1>
  <v-timeline class="pa-5 mb-2">
    <v-timeline-item
      v-for="(movie, i) in movieArray"
      :key="i"
      color="#FFC400"
      small
    >
      <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold`"
          v-text="movie.release_date"
        ></span>
      </template>
      <div class="py-4">
        <h2 :class="`headline font-weight-light mb-1`" >{{ movie.title }}</h2>
        <h4 :class="`subheadling font-weight-light mb-4`" >Episode {{ movie.episode_id }}</h4>
        <div>
          {{ movie.opening_crawl }}
        </div>
      </div>
    </v-timeline-item>
    <v-btn text @click="getMovies"></v-btn>
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
            let newArray = response.data.results.sort(function(a, b){
                return a.episode_id - b.episode_id
            })
            this.movieArray = newArray
            // let movieArray = array.map(element => element.title)
        }).catch(error => console.log(error))
        } 
    }
  }
</script>