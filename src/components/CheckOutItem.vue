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
                <check-out-img :vehicle="vehicle"></check-out-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Name: {{ vehicle.name }}</v-list-item-title>
                <v-list-item-subtitle>Manufacturer: {{ vehicle.manufacturer }}</v-list-item-subtitle>
                <v-list-item-subtitle>Cargo Capacity: {{ vehicle.cargo_capacity }}</v-list-item-subtitle>
                <v-list-item-subtitle>Price: {{ vehicle.cost_in_credits }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider> 
                <v-btn class="ma-1" text x-small @click="remove()">Remove</v-btn>
        </v-list>
      </v-card>
</template>



<script>
import CheckOutImg from '../components/CheckOutImg'

export default {
    props: ["vehicle"],
    components: {
        CheckOutImg,
    },
    methods: {
        remove () {
            let removed = this.vehicle
            let array = this.$store.state.selectedVehicles
            let index = array.indexOf(removed)
            if (index > -1){
                array.splice(index, 1)
                console.log("item was removed")
            }
        }
    }
    
}


</script>

<style scoped>
</style>