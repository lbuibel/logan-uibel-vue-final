<template>
<div>
  <v-card class="mx-auto pa-3" max-width="344" dark>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1"> {{ vehicle.name }}</v-list-item-title>
        <v-list-item-subtitle> {{ vehicle.vehicle_class }}</v-list-item-subtitle>
      </v-list-item-content>
  </v-card>
</div>

</template>

<script>
export default {
  props: ["vehicle"]
};
</script>

<style scoped>
</style>