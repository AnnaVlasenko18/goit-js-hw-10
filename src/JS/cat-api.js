// live_QQLhBtKpZyqwDx2QyxuCHGOh9LdewPcwV4lguAYkXR7nVfVO847D4eU0WEaEBle9
const BASE_URL = "https://api.thecatapi.com/v1";
const ENDPOINT = "images/search";
const SEARCH_ENDPOINT = "breeds";
const options = {
    headers: {
        "x-api-key": "live_QQLhBtKpZyqwDx2QyxuCHGOh9LdewPcwV4lguAYkXR7nVfVO847D4eU0WEaEBle9"
    }
}

export function fetchBreeds(){
return fetch(`${BASE_URL}/${SEARCH_ENDPOINT}`)
.then(response => {
    if(!response.ok){
        throw new Error (response.statusText)
    }
    return response.json()
})
}


export function fetchCatByBreed(breedId){
return fetch(`${BASE_URL}/${ENDPOINT}?breed_ids=${breedId}`, options)
.then(response => {
    if(!response.ok){
        throw new Error (response.statusText)
    }
    return response.json()
})
}
    
