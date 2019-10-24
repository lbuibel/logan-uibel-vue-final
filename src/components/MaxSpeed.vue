<template>
    <div>
        <v-list-item-subtitle>Max Speed (Atmospheric): {{ vehicle.max_atmosphering_speed }}</v-list-item-subtitle>
            <v-progress-linear
                class="mb-2"
                background-color="#666"
                color="green"
                height="5"
                v-model= vehicle.max_atmosphering_speed
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