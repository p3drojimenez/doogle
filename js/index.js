new Vue({
    el: '#app',
    data: { 
        breedList: [],
        breed:'',
        errMessage: '',
        breedSelected: '',
        dogPictureList: [],
        breedName: ''
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
                this.breedName = breed
                this.dogPictureList= response.data.message
            })
            .catch(function (error) {
                this.errMessage(error)
            })
        },
        onSelectedBreed(){
            this.breed= ''
            this.getDogPictures(this.breedSelected)
        },
        searchBreed(){
            this.dogPictureList = []
            this.errMessage=''
            this.breedSelected= '',
            this.breedName = ''
            let search = this.breesListSearch.filter( (item) => item === this.breed )
            console.log(search)
            if(search.length != 0){
                 this.getDogPictures(this.breed)
            }else{
                this.errMessage = 'We can´t brind an amaizing dog pictures if you don´t write any one'
            }
       
        }
    },
})