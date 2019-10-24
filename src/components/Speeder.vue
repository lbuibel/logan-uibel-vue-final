<template>
<div>
  <v-card class="mx-auto pa-3" width="344" dark>
      <v-list-item-content>
          <v-img
            src= "../../public/assets/c-9979 landing craft.jpg"
          ></v-img>
        <v-list-item-title class="headline mb-6"> {{ vehicle.name }}</v-list-item-title>

        <passenger-capacity :vehicle="vehicle"></passenger-capacity>
        <crew-capacity :vehicle="vehicle"></crew-capacity>
        <max-speed :vehicle="vehicle"></max-speed>



      <!-- <v-btn @click="calcCredits">Get Cost</v-btn> -->


      </v-list-item-content>
  </v-card>
</div>

</template>

<script>
import PassengerCapacity from '../components/PassengerCapacity'
import CrewCapacity from '../components/CrewCapacity'
import MaxSpeed from '../components/MaxSpeed'


export default {
    props: ["vehicle"],
    components: {
        PassengerCapacity,
        CrewCapacity,
        MaxSpeed,
    },
//     data: () => {
//     return {
//       credits: vehicle.cost_in_credits,
//     }
//   },
}

</script>

<style scoped>
</style>