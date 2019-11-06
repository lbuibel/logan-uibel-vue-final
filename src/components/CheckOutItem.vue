<template>
    <!-- <v-card
        class="mx-auto"
        max-width="344"
        dark
        >

        <ship-image class="mb-2" :vehicle="vehicle"></ship-image>
        <v-list-item-title class="headline mb-1 pl-2"> {{ vehicle.name }}</v-list-item-title>
        <v-list-item-subtitle class="mb-3 pl-2"> Vehicle Class: {{ vehicle.vehicle_class }} </v-list-item-subtitle>
    </v-card> -->

    <v-card class="mb-2" dark>
        <v-list two-line>
            <v-subheader> {{ vehicle.name }}</v-subheader>
            <v-divider></v-divider>
            <v-list-item :key="vehicle.name">
              <v-list-item-avatar>
                  <img src='https://cdn.vuetifyjs.com/images/lists/1.jpg'>
                <!-- <ship-image class="mb-2" :vehicle="vehicle"></ship-image> -->
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title> {{ vehicle.name }}</v-list-item-title>
                <v-list-item-subtitle> {{ vehicle.vehicle_class }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
        </v-list>
      </v-card>
</template>



<script>
import ShipImage from '../components/ShipImage'

export default {
    props: ["vehicle"],
//     data: () => {
//     return {
//       show: false,
//       color: "gray",
//     }
//   },
    components: {
        ShipImage,
    },
    
}


</script>

<style scoped>
</style>