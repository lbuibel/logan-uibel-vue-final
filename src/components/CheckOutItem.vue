<template>
    <v-card
        class="mx-auto"
        max-width="344"
        dark
        >

        <ship-image class="mb-2" :vehicle="vehicle"></ship-image>
        <v-list-item-title class="headline mb-1 pl-2"> {{ vehicle.name }}</v-list-item-title>
        <v-list-item-subtitle class="mb-3 pl-2"> Vehicle Class: {{ vehicle.vehicle_class }} </v-list-item-subtitle>
    </v-card>
</template>



<script>
// import PassengerCapacity from '../components/PassengerCapacity'
// import CrewCapacity from '../components/CrewCapacity'
// import MaxSpeed from '../components/MaxSpeed'
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