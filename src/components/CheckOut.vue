<template>
    <v-container>
            <div v-for="vehicle in vehicles" :key="vehicle.name">
                <check-out-item :vehicle="vehicle"></check-out-item>
            </div>
    </v-container>
</template>



<script>
import CheckOutItem from '../components/CheckOutItem'

export default {
    props: ["vehicles"],
    components: {
        CheckOutItem
    },
}
</script>

<style scoped>
    .container {
        min-height: 50vh;
    }

</style>