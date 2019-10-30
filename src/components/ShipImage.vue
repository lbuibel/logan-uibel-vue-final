<template>
    <div>
          <v-img 
            v-bind:src = vehicleNumber()
            width="350"
            >
            </v-img>

            <v-btn @click="vehicleNumber()">ID NUMBER</v-btn>

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
                console.log("img ID of: " + this.vehicle.name + " " + imgID)
                console.log(`https://starwars-visualguide.com/assets/img/vehicles/${imgID.slice(1,2)}.jpg`);
                return `https://starwars-visualguide.com/assets/img/vehicles/${imgID.slice(1,2)}.jpg`;
            } else {
                console.log("img ID of: " + this.vehicle.name + " " + imgID)
                return `https://starwars-visualguide.com/assets/img/vehicles/${imgID}.jpg`;
            }
        },
    }
}

//People images
function getCharNumber(charURL) {
  let end = charURL.lastIndexOf("/");
  let charID = charURL.substring(end - 2, end);
  if (charID.indexOf("/") !== -1) {
    return charID.slice(1, 2);
  } else {
    return charID;
  }
}

</script>

<style scoped>
</style>