    <template>
    <div>
    <v-card
        class="mx-auto pa-2 ma-2 card"
        v-gray-mode
    >
        <v-card-title class="pl-2">Order Form</v-card-title>
            <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            @submit.prevent="onSubmit"
            >
                <v-text-field
                v-model="name"
                :counter="20"
                :rules="nameRules"
                label="Name"
                required
                ></v-text-field>

                <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email"
                required
                ></v-text-field>

                <v-text-field
                v-model="address"
                :rules="planetRules"
                label="Ship to - Planet"
                required
                ></v-text-field>


                <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'No Droids Allowed!']"
                label="I am not a Droid"
                required
                ></v-checkbox>

                <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="onSubmit"
                >
                Order
                </v-btn>

                <v-btn
                color="error"
                class="mr-4"
                @click="reset"
                >
                Clear
                </v-btn>

            </v-form>

    </v-card>
    <v-btn @click="getPlanets()">Planets</v-btn>
    </div>

</template>




<script>
import axios from "axios";

  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 20 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      planetRules: [
          v => !!v || 'Planet is required',
      ],
      address: '',
      checkbox: false,
    }),

    methods: {
      onSubmit() {
          const formData = {
              name: this.name,
              emai: this.email,
              address: this.address
          }
          this.$store.dispatch('orderSubmitted', {
              name: this.name,
              email: this.email,
              address: this.address
          })
        console.log(formData)
      },
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      getPlanets () {
        return axios.get('https://swapi.co/api/planets').then
        (response => {
            let array = response.data.results
            let planetArray = array.map(element => element.name)
            console.log(planetArray)
            this.items=planetArray
        }).catch(error => console.log(error))
        console.log('Data retrieved')
        },
    },
    directives: {
      'gray-mode': {
        bind(el, binding, vnode) {
          el.style.backgroundColor = 'gray';
        }
    }
  },
}

</script>



<style scoped>


</style>