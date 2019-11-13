<template>
    <div>
          <v-avatar size="62">
            <img
                v-bind:src = vehicleNumber()
                lazy-src="https://starwars-visualguide.com/assets/img/placeholder.jpg"
                alt="item avatar"
            >
          </v-avatar>
            
    </div>
</template>

<script>


export default {
    props: ["vehicle"],
    data: () => {
        return {
        }
    },
    methods: {
        vehicleNumber () {
            let url = (this.vehicle.url)
            let end = url.lastIndexOf("/")
            let imgID = url.substring(end - 2, end);
            if (imgID.indexOf("/") !== -1) {
                return `https://starwars-visualguide.com/assets/img/vehicles/${imgID.slice(1,2)}.jpg`;
            } else {
                return `https://starwars-visualguide.com/assets/img/vehicles/${imgID}.jpg`;
            }
        },
    }
}


</script>

<style scoped>
</style>