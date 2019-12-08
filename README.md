### final-project
Link to final project:

[Final](https://vehicles-final-project-3790.netlify.com/)


## conditional logic and Javascript array methods to render large lists
Within the Vehicles.vue component, four different filter functions were used to filter the vehicle type for the user

[Vehicles.vue](https://github.com/lbuibel/logan-uibel-vue-final/blob/master/src/components/Vehicles.vue)

```JavaScript
  methods: {
    airSpeeders () {
      this.array = vehicles.filter(vehicles => vehicles.vehicle_class == 'airspeeder')
    },
    wheeledVehicles () {
      this.array= vehicles.filter(vehicles => vehicles.vehicle_class == 'wheeled')
    },
    repulsorcraft  () {
      this.array= vehicles.filter(vehicles => vehicles.vehicle_class == 'repulsorcraft')
    },
    all () {
      this.array = vehicles
    }
  }
```

## Communication between components using props, custom events, or local store.
The components MaxSpeed.vue, PassengerCapacity.vue, ShipImage.vue, Speeder.vue all use the vehicle props which is is used to display the vehicle information from the vehicles.js file.

Local store is used in the Speeder.vue component, and the Form.vue component

The first example found on [Speeder.vue](https://github.com/lbuibel/logan-uibel-vue-final/blob/master/src/components/Speeder.vue) deals with users selecting a vehicle via a button which calls the selectVehicles() method.  This method pushed that vehicle (which is an object) to the selectedVehicles array in the store.

The second metho is found on [Form.vue](https://github.com/lbuibel/logan-uibel-vue-final/blob/master/src/components/Form.vue) sends user data to the store which is later used in [Confirmation.vue](https://github.com/lbuibel/logan-uibel-vue-final/blob/master/src/components/Confirmation.vue)
```JavaScript
    methods: {
        selectVehicle () {
            this.clicked = true;
            this.snackbar = true;
            this.$store.state.selectedVehicles.push(this.vehicle)
        }
    }

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
```

## Form for user input that provides useful form validation and feedback.
After users make their vehicle selection, they can go to the checkout page to order their vehicles.  The Form.vue component is used on that page and contains the form.

[Form.vue](https://github.com/lbuibel/logan-uibel-vue-final/blob/master/src/components/Form.vue)

## Custom Directive
A custom directive is used within the Form.vue component located on line 6.  It sets the size of the element and it's position on the page.

```JavaScript
    directives: {
      'wrapper': {
        bind(el, binding, vnode) {
          el.style.width = "84%";
        }
    }
  }
```

## Animations
Navigating between triggers an animation, and is found on the App.vue file.  It fades the page in and slightly up.

[App.vue](https://github.com/lbuibel/logan-uibel-vue-final/blob/master/src/App.vue)

```CSS
  .slide-enter-active {
    animation: slide-in 150ms ease-out forwards;
  }
  .slide-leave-active {
    animation: slide-out 150ms ease-out forwards;
  }
  @keyframes slide-in {
    from {
      transform: translateY(-10px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-10px);
      opacity: 0;
    }
  }
```
## Connecting to a server - AXIOS
Axios retrieves data from the swap api and is used in the Timeline.vue component.  This data is used to create timeline/history of all the Star Wars films.

In order to get the timeline to display the films in the right order, I had to sort the retrieved films array.

This data is displayed on the home page of the website.

[Timeline.vue](https://github.com/lbuibel/logan-uibel-vue-final/blob/master/src/components/Timeline.vue)

```JavaScript
import axios from "axios";
  export default {
    data: () => ({
      movieArray: [],
    }),
    computed: {
       getMovies () {
        return axios.get('https://swapi.co/api/films').then
        (response => {
            let newArray = response.data.results.sort(function(a, b){
                return a.episode_id - b.episode_id
            })
            this.movieArray = newArray
            // let movieArray = array.map(element => element.title)
        }).catch(error => console.log(error))
        } 
    }
  }
</script>
```

## 3 Different Routes
Three different routes are used in the header component to provide navigation for the site.  An additional route named confirmation-page is used to take users to a confirmation page after submitting their vehicle form.

[Router.js](https://github.com/lbuibel/logan-uibel-vue-final/blob/master/src/router.js)
[Header.vue](https://github.com/lbuibel/logan-uibel-vue-final/blob/master/src/components/Header.vue)

## Managing State using Vuex
The store contains two sets of information, the first is an empty array named selectedVehicles contains the vehicles that are selected by the user.

This data is primarily used in the [Checkout.vue](https://github.com/lbuibel/logan-uibel-vue-final/blob/master/src/views/Checkout.vue) page.  On line 50 I set up a selectedVehicle array wich is the same at the array in the store.  Then on line 4 I looped through this array to display all the info using the checkout component.

The second set of info named user contains the information gather by the form.

[Store.js](https://github.com/lbuibel/logan-uibel-vue-final/blob/master/src/store.js)



