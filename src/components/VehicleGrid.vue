<template>
    <v-container>
        <v-row class="flex-wrap">
            <v-col col="12" sm="6" md="4" v-for="vehicle in vehicles" :key="vehicle">
                <speeder :vehicle="vehicle">
                </speeder>
            </v-col>
        </v-row>
    </v-container>
</template>



<script>
import Speeder from '../components/Speeder'

export default {
    props: ["vehicles"],
    components: {
        Speeder
    },
}
</script>

<style scoped>

</style>