<template>
<div>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
    dark
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">ORDER CONFIRMATION</div>
        <v-list-item-title class="headline mb-1"> {{ userName }}</v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

  </v-card>
  </div>
</template>

<script>

export default {
  components: {
  },
  computed: {
      userName() {
          return this.$store.getters.user
      }
  }
}
</script>