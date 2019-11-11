<template>
<div>
    <h1>Your Selection</h1>
      <check-out :vehicles="selectedVehicles"></check-out>
        <v-subheader dark>Your Selection Totals</v-subheader>
          <v-card
          dark
          class="mx-auto mb-5"
          tile
        >
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Total Cargo Capacity</v-list-item-title>
              <v-list-item-subtitle>{{ totalCargo }} units</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Total Passenger Capacity</v-list-item-title>
              <v-list-item-subtitle>{{ totalPassengers }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Total Crew Capacity</v-list-item-title>
              <v-list-item-subtitle>{{ totalCrew }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>

</div>
</template>

<script>
// import VehicleGrid from "../components/VehicleGrid";
import CheckOut from "../components/CheckOut"
export default {
  components: {
    CheckOut
  },
  computed: {
      selectedVehicles() {
        return this.$store.state.selectedVehicles;
        },
      totalCargo() {
        let array = this.selectedVehicles
        let cargo = array.reduce((acc, vehicle)=> acc + vehicle.cargo_capacity, 0)
        return cargo
      },
      totalPassengers() {
        let array = this.selectedVehicles
        let passenger = array.reduce((acc, person)=> acc + person.passengers, 0)
        return passenger
      },
      totalCrew() {
        let array = this.selectedVehicles
        let crew = array.reduce((acc, person)=> acc + person.crew, 0)
        return crew
      }
    },
}

</script>