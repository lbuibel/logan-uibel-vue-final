<template>
<div>
    <h1>Thank You For Your Order</h1>
    
  <v-card
    class="mx-auto mb-8"
    outlined
    dark
    width="844"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">ORDER CONFIRMATION</div>
        <v-list-item-title class="headline mb-1"> {{ userName }}</v-list-item-title>
        <v-list-item-subtitle>Email: {{ userEmail }}</v-list-item-subtitle>
        <v-list-item-subtitle class="pb-4">Shipping Address: {{ userAddress }}</v-list-item-subtitle>
    <v-divider class="mx-4"></v-divider>
        <v-list-item-title class="headline mb-1 pt-4">Vehicles Ordered</v-list-item-title>
        
        <confirmation-list></confirmation-list>

      </v-list-item-content>
    </v-list-item>
    <v-card-actions>
        <v-btn class="ma-2" outlined color="blue" to="vehicles">
            Continue Shopping
        </v-btn>
    </v-card-actions>
  </v-card>

  </div>
</template>

<script>
import ConfirmationList from '../components/ConfirmationList'
export default {
  components: {
      ConfirmationList
  },
  computed: {
      userName() {
          return this.$store.getters.userName
      },
      userEmail() {
          return this.$store.getters.userEmail
      },
      userAddress() {
          return this.$store.getters.userAddress
      },
      selectedVehicles() {
        return this.$store.state.selectedVehicles;
      }
  }
}
</script>

<style scoped>
    .container {
        min-height: 50vh;
    }
</style>