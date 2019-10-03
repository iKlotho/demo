
import axios from "axios"

   const instance = axios.create(
     {baseURL:"https://randomuser.me/api/",
     timeout:20000,
     headers:{"Content-Type":"application/json","Accept":"application/json"}})
 export default instance;

