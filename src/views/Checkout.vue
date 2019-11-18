<template>
<div>
    <h1>Your Selection</h1>
      <check-out :vehicles="selectedVehicles"></check-out>
        <v-subheader dark>Your Selection Totals</v-subheader>
          <v-card
          dark
          class="mx-auto mb-5"
          tile
          v-wrapper
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

  <Form></Form>

</div>
</template>

<script>
// import VehicleGrid from "../components/VehicleGrid";
import CheckOut from "../components/CheckOut"
import Form from "../components/Form"

export default {
  components: {
    CheckOut,
    Form
  },
  computed: {
      selectedVehicles() {
        return this.$store.state.selectedVehicles;
        },
      totalCargo() {
        let cargo = this.$store.state.selectedVehicles.reduce((acc, vehicle)=> acc + vehicle.cargo_capacity, 0)
        return cargo
      },
      totalPassengers() {
        let passenger = this.$store.state.selectedVehicles.reduce((acc, person)=> acc + person.passengers, 0)
        return passenger
      },
      totalCrew() {
        let crew = this.$store.state.selectedVehicles.reduce((acc, person)=> acc + person.crew, 0)
        return crew
      }
    },
    directives: {
      'wrapper': {
        bind(el, binding, vnode) {
          el.style.width = "84%";
        }
    }
  },
}

</script>

<style scoped>
  h1 {
    padding: 2%;
  }
</style>