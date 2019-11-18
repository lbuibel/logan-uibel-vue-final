<template>
<div>
  <v-parallax
    dark
    src="../../public/assets/stars.jpg"
    height="500"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <!-- <h1 class="display-4 font-weight-heavy mb-4">Star Wars</h1>
        <h4 class="subheading">Build Your Fleet Today!</h4> -->
        <v-img 
        src="../../public/assets/star_wars_logo.png" 
        alt="logo"
        height="auto"
        max-width='500'
        class="ml-auto mr-auto"
        ></v-img>
      </v-col>
    </v-row>
  </v-parallax>

  <div class="pa-5 mb-5">
      <h1>Vehicle Depot</h1>
      <p>The number one place in the galaxy for your vehicle needs!</p>
  </div>

  <timeline></timeline>

</div>
</template>

<script>
import Timeline from '../components/Timeline'
export default {
    data: () => {
    return {
      show: false,
    }
  },
    components: {
      Timeline,
    }
}
</script>

<style scoped>
  #contentWrapper {
    width: 84%;
    margin: 2% auto;
    height: 15vh;
  }
</style>