<template> 
            <v-list two-line>
                <!-- <v-subheader> {{ vehicle.name }}</v-subheader>
                <v-divider></v-divider> -->
                <v-list-item :key="vehicle.name">

                <v-list-item-avatar>
                    <check-out-img :vehicle="vehicle"></check-out-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title> {{ vehicle.name }}</v-list-item-title>
                    <v-list-item-subtitle>Manufacturer: {{ vehicle.manufacturer }}</v-list-item-subtitle>
                    <v-list-item-subtitle>Credits: {{ vehicle.cost_in_credits }}</v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>
            </v-list>
</template>



<script>
import CheckOutImg from '../components/CheckOutImg'

export default {
    props: ["vehicle"],
    components: {
        CheckOutImg,
    },
}


</script>

<style scoped>

</style>