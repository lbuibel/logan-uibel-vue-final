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

    <v-btn @click= "show = !show">Test</v-btn>

    <transition name="fade">
        <div class="homepage" v-if="show">
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
    </transition>

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
    .fade-enter {
        opacity: 0;
    }
    .fade-active {
        transition: opacity .5s;
    }
    .fade-leave {
        opacity: 1;
    }
    .fade-leave-active {
        transition: opacity .5s;
        opacity: 0;
    }
</style>