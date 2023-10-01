import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_QQLhBtKpZyqwDx2QyxuCHGOh9LdewPcwV4lguAYkXR7nVfVO847D4eU0WEaEBle9";


export function fetchBreeds() {
 return axios.get('https://api.thecatapi.com/v1/breeds')
     .then((response) => {
         if (response.status !== 200) {
             throw new Error (error)
         }
            return response.data;
     })
};

export function fetchCatByBreed(breedId) {
      return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
          .then((response) => {
              if (response.status !== 200) {
             throw new Error (error)
         }
                return response.data;
            })
};
    
