
import axios from 'axios';
import { API_URL } from '../config/config';

export function login(data) {
   return axios.post(API_URL+'api/admin/login', data) 
}

export function addCategory(data){
   return axios.post(API_URL+'api/category/addCategory', data)
}

export function getcategoryList(data){
   return axios.post(API_URL+'api/category/categoryList', data)
}

export function categoryUpdate(data){
   return axios.post(API_URL+'api/category/categoryUpdate', data)
}

export function categoryDelete(data){
   return axios.post(API_URL+'api/category/categoryDelete', data)
}

export function uploadFile(data) {
   return fetch(API_URL + 'api/upload', {
           method: 'POST',
           body: data,
   }).then(res => res.json())
}

export function addProduct(data){
   return axios.post(API_URL+'api/product/addProduct', data)
}

export function getproductList(data){
   return axios.post(API_URL+'api/product/productList', data)
}

export function productListMenu(data){
   return axios.post(API_URL+'api/product/productListMenu', data)
}

