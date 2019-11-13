<template>
    <v-container>
            <div v-for="vehicle in selectedVehicles" :key="vehicle.name">
                <confirmation-item :vehicle="vehicle"></confirmation-item>
            </div>
    </v-container>
</template>



<script>
import ConfirmationItem from '../components/ConfirmationItem'

export default {
    components: {
        ConfirmationItem
    },
    computed: {
      selectedVehicles() {
        return this.$store.state.selectedVehicles;
    },
    }
}
</script>

<style scoped>
    .container {
        min-height: 50vh;
    }

</style>