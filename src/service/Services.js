
import axios from 'axios';
const API_URL = "http://localhost:8080/"

export function login(data) {
   return axios.post(API_URL+'api/login', data) 
}