import axios from 'axios';

let API_BASE_URL = "https://fortnite-api.theapinetwork.com/"

class CategoryService {

    getCategories(){
        return axios.get(API_BASE_URL+"store/get")
    }
}

export default CategoryService;