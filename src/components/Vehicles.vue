<template>
<div>
    <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn
            color="primary"
            dark
            v-on="on"
            class="ma-2"
            >
            Vehicle Type
            </v-btn>
          </template>
          <v-list>
          <v-list-item @click="all">
            <v-list-item-title>All</v-list-item-title>
          </v-list-item>
            <v-list-item @click="airSpeeders">
            <v-list-item-title>Air Speeders</v-list-item-title>
          </v-list-item>
          <v-list-item @click="wheeledVehicles">
            <v-list-item-title>Wheeled Vehicles</v-list-item-title>
          </v-list-item>
          <v-list-item @click="repulsorcraft">
            <v-list-item-title>Repulsocrafts</v-list-item-title>
          </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <vehicle-grid :vehicles="array"></vehicle-grid>
</div>
</template>

<script>
import { vehicles } from "../assets/vehicles";
import VehicleGrid from "../components/VehicleGrid";

export default {
  name: "App",
  components: {
    VehicleGrid,
  },
  data: () => {
    return {
      array: vehicles,
    };
  },
  methods: {
    airSpeeders () {
      this.array = vehicles.filter(vehicles => vehicles.vehicle_class == 'airspeeder')
    },
    wheeledVehicles () {
      this.array= vehicles.filter(vehicles => vehicles.vehicle_class == 'wheeled')
    },
    repulsorcraft  () {
      this.array= vehicles.filter(vehicles => vehicles.vehicle_class == 'repulsorcraft')
    },
    all () {
      this.array = vehicles
    }
  }
};


</script>

<style scoped>

</style>
