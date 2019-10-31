<template>
    <v-card
        class="mx-auto"
        max-width="344"
        dark
        >

        <ship-image class="mb-2" :vehicle="vehicle"></ship-image>
        <v-list-item-title class="headline mb-1 pl-2"> {{ vehicle.name }}</v-list-item-title>
        <v-list-item-subtitle class="mb-3 pl-2"> Vehicle Class: {{ vehicle.vehicle_class }} </v-list-item-subtitle>

        <v-card-actions>
            <v-btn :color="color" @click="selectedVehicle">Select</v-btn>

        <v-spacer></v-spacer>

        <v-btn
            icon
            @click="show = !show"
        >
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
        </v-card-actions>
            <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>

                <passenger-capacity :vehicle="vehicle" class="pr-2 pl-2 mt-2"></passenger-capacity>
                <crew-capacity :vehicle="vehicle" class="pr-2 pl-2"></crew-capacity>
                <max-speed :vehicle="vehicle" class="pr-2 pl-2"></max-speed>

                <v-divider></v-divider>

            </div>
        </v-expand-transition>
  </v-card>
</template>



<script>
import PassengerCapacity from '../components/PassengerCapacity'
import CrewCapacity from '../components/CrewCapacity'
import MaxSpeed from '../components/MaxSpeed'
import ShipImage from '../components/ShipImage'

import { eventBus } from '../main'


export default {
    props: ["vehicle"],
    data: () => {
    return {
      show: false,
      color: "gray",
      counter: 1,
    }
  },
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
    },
    methods: {
        selectedVehicle () {
            this.color = "blue";
            console.log("vehicle selection: " + this.vehicle.name)
        }
    }
}


</script>

<style scoped>
</style>