<template>
<div>
  <v-card class= "pa-3" dark>
      <v-list-item-content>

        <ship-image :vehicle="vehicle"></ship-image>
        <v-list-item-title class="headline"> {{ vehicle.name }}</v-list-item-title>
        <v-list-item-subtitle class="mb-8"> Vehicle Class: {{ vehicle.vehicle_class }} </v-list-item-subtitle>

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
import ShipImage from '../components/ShipImage'


export default {
    props: ["vehicle"],
    components: {
        PassengerCapacity,
        CrewCapacity,
        MaxSpeed,
        ShipImage,
    },
    filters: {
        toUppercase (value) {
            return value.toUppercase();
        }
    }
}


</script>

<style scoped>
</style>