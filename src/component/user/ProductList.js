import React, { useEffect, useState } from 'react'
import { getproductList } from '../../service/Services'
import { useNavigate } from 'react-router-dom'
import { objSharedRequest } from '../../service/common'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { IMAGE_URL } from '../../config/config';

export default function ProductList() {

  const navigate = useNavigate()

    const [productList, setProductList] = useState([])

    useEffect(() => {
      getProductList()
    }, [])

    function getProductList() {
      getproductList({}).then((result) => {
            if (result.data.success) {
              setProductList(result.data.response)
            } else {
              setProductList([])
            }
        })
    }

    function goto(path, item){
        navigate('/'+path)
        objSharedRequest(item)
    }

    // function deleteCategoryFun(categoryId){

    //     const data ={
    //         "categoryId":categoryId
    //     }
    //     categoryDelete(data).then((result)=>{
    //         if(result.data.success){
    //             NotificationManager.success(result.data.message);
    //             getCategoryList()
    //         }else{
    //             NotificationManager.error(result.data.message);
    //         }
    //     })

    // }
  return (
    <div>
       <div className='p-2'>
            <h1>Product List</h1>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Sl. No.</th>
                        <th scope="col" >Photo</th>
                        <th scope="col" >Name</th>
                        <th scope="col" >Category Type</th>
                        <th scope="col" >Price</th>
                        <th scope="col" >Color</th>
                        <th scope="col" >Size</th>
                        <th scope="col" >Quantity</th>
                        <th scope="col" >Unit</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productList.map((item, index) => (
                            <tr key={index}>
                                <th scope="row " >{index+1}</th>
                                <td style={{width: '6%'}}> <img className='table-img' src={IMAGE_URL+item.productPhoto} /></td>
                                <td >{item.name}</td>
                                <td >{item.category_name}</td>
                                <td >{item.price}</td>
                                <td >{item.color}</td>
                                <td >{item.size}</td>
                                <td >{item.quantity}</td>
                                <td >{item.unit}</td>
                                <td><button className='btn btn-primary'onClick={()=>{goto('add-product', item)}}>Edit</button><button className='btn btn-danger mx-2' >Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <NotificationContainer/>

        </div>
    </div>
  )
}
