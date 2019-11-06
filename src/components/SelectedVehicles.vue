<template>
    <div>
      <vehicle-grid :vehicles="selectedVehicles"></vehicle-grid>
    </div>
</template>

<script>
import VehicleGrid from './VehicleGrid'
export default {
    components: {
        VehicleGrid
    },
    computed: {
        selectedVehicles() {
            return this.$store.state.selectedVehicles;
        }
    },
}

</script>

<style scoped>
</style>