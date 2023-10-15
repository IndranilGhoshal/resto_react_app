
import axios from 'axios';
const API_URL = "http://localhost:8080/"

export function login(data) {
   return axios.post(API_URL+'api/login', data) 
}

export function addCategory(data){
   return axios.post(API_URL+'api/addCategory', data)
}

export function getcategoryList(data){
   return axios.post(API_URL+'api/categoryList', data)
}

export function categoryUpdate(data){
   return axios.post(API_URL+'api/categoryUpdate', data)
}

export function categoryDelete(data){
   return axios.post(API_URL+'api/categoryDelete', data)
}