<template>
<div>
    <h1>Thank You For Your Order</h1>
  <confirmation />
</div>
</template>

<script>
import Confirmation from '../components/Confirmation'

export default {
  components: {
    Confirmation
  },
}
</script>

<style scoped>
  h1 {
    padding: 2%;
  }
</style>