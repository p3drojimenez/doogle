new Vue({
    el: '#app',
    data: { 
        breedList: [],
        errMessage: '',
        breedSelected: '',
        dogPictureList: []
    },
    mounted() {
        this.getBreedList()
    },
    methods: {
        getBreedList(){
            const API = 'https://dog.ceo/api/breeds/list/all'
            axios.get(API)
          .then( (response) => {
              const res = response.data.message
                console.log(res)
              this.breedList = Object.keys(res),
              this.breesListSearch = this.breedList
          })
          .catch(function (error) {
            this.errMessage = 'We can´t brind an amaizing dog pictures'
          })
        },
        getDogPictures(breed){
            const api = 'https://dog.ceo/api/breed/'+ breed +'/images'
            axios.get(api)
            .then( (response) => {
                this.dogPictureList= response.data.message
            })
            .catch(function (error) {
                this.errMessage(error)
            })
        },
        onSelectedBreed(){
            this.getDogPictures(this.breedSelected)
        }
    },
})