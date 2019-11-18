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
  <h1>Your Mission</h1>

</div>
</template>

<script>
export default {
    data: () => {
    return {
      show: false,
    }
  }
}
</script>

<style scoped>

</style>