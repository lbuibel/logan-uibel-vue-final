<template>
    <v-container>
        <v-row>
            <v-col col="12" sm="6" md="4" v-for="vehicle in vehicles" :key="vehicle.name">

                <speeder :vehicle="vehicle"></speeder>

            </v-col>
        </v-row>
    </v-container>
</template>



<script>
import Speeder from '../components/CheckOutItem'

export default {
    props: ["vehicles"],
    components: {
        Speeder
    },
}
</script>

<style scoped>

</style>