<template>
  <v-app>
    <v-content>
      <Header/>
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/">About</router-link>
      </div>
      <Footer/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Footer from './components/Footer'
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Footer,
    Header,
  },
  data: () => ({
    //
  })
}
</script>
