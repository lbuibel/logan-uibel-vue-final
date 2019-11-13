<template>
    <v-container>
        <v-row class="flex-wrap">
            <v-col col="12" sm="6" md="4" v-for="vehicle in vehicles" :key="vehicle.name">
                
                <transition name="fade-in" appear>
                    <speeder v-if="show" :vehicle="vehicle"></speeder>
                </transition>
                
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
    data: () => {
    return {
      show: true,
    }
    }
}
</script>

<style scoped>

</style>