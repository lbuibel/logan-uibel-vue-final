<template>
    <div>
            <v-list-item-subtitle class="mb-1">Passenger Capacity: {{ vehicle.passengers }}</v-list-item-subtitle>
            <v-progress-linear
                class="mb-2"
                background-color="#666"
                color="#1697F6"
                height="5"
                v-model= vehicle.passengers
                rounded
                reactive
            >
            </v-progress-linear>
    </div>
</template>

<script>

export default {
    props: ["vehicle"],
//     data: () => {
//   },
}

</script>

<style scoped>
</style>