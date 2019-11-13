<template>

<transition name="fade">
    <div v-if="show">
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
    </div>
</transition>
</template>



<script>
import CheckOutImg from '../components/CheckOutImg'

export default {
    props: ["vehicle"],
    components: {
        CheckOutImg,
    },
    data: () => {
    return {
      show: true,
        }
    },
    methods: {
        remove () {
            /**Fade works, but item is removed too quickly for fade to occur**/
            this.show = false
            let removed = this.vehicle
            let array = this.$store.state.selectedVehicles
            let index = array.indexOf(removed)
            if (index > -1){
                array.splice(index, 1)
                console.log("item was removed")
            }
        },
    }
    
}


</script>

<style scoped>
    .fade-enter {
        opacity: 0;
    }
    .fade-active {
        transition: opacity 1s;
    }
    .fade-leave {
        opacity: 1;
    }
    .fade-leave-active {
        transition: opacity .5s;
        opacity: 0;
    }

</style>