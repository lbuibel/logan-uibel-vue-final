<template>
    <div>
          <v-img 
            v-bind:src = vehicleNumber()
            lazy-src="https://starwars-visualguide.com/assets/img/placeholder.jpg"
            height="200"
            :aspect-ratio="16/9"
            >
            </v-img>
            
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
                // console.log("img ID of: " + this.vehicle.name + " " + imgID)
                // console.log(`https://starwars-visualguide.com/assets/img/vehicles/${imgID.slice(1,2)}.jpg`);
                return `https://starwars-visualguide.com/assets/img/vehicles/${imgID.slice(1,2)}.jpg`;
            } else {
                // console.log("img ID of: " + this.vehicle.name + " " + imgID)
                return `https://starwars-visualguide.com/assets/img/vehicles/${imgID}.jpg`;
            }
        },
    }
}


</script>

<style scoped>
</style>