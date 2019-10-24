<template>
    <div>
            <v-list-item-subtitle class="mb-1">Crew Capacity: {{ vehicle.crew }}</v-list-item-subtitle>
            <v-progress-linear
                class="mb-2"
                background-color="#666"
                color="red"
                height="5"
                v-model= vehicle.crew
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