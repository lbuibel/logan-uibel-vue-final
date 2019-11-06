<template>
<div>
    <h1>Your Selection</h1>
      <check-out :vehicles="selectedVehicles"></check-out>
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
        }
    }
}
</script>