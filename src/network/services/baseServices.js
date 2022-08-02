import { API_URL } from "../env/config"



export const baseService = {
    get: (url) => {
        fetch(API_URL+url)
        .then(response => response.json())
        .then(data => console.log(data))
    }
}   