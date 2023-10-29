import React, { useEffect, useState } from 'react'
import { categoryDelete, getcategoryList } from '../../service/Services'
import { useNavigate } from 'react-router-dom'
import { objSharedRequest } from '../../service/common'
import {NotificationContainer, NotificationManager} from 'react-notifications';


export default function CategoryList() {

    const navigate = useNavigate()

    const [categoryList, setCategoryList] = useState([])

    useEffect(() => {
        getCategoryList()
    }, [])

    function getCategoryList() {
        getcategoryList({}).then((result) => {
            if (result.data.success) {
                setCategoryList(result.data.response)
            } else {
                setCategoryList([])
            }
        })
    }

    function goto(path, item){
        navigate('/'+path)
        objSharedRequest(item)
    }

    function deleteCategoryFun(categoryId){

        const data ={
            "categoryId":categoryId
        }
        categoryDelete(data).then((result)=>{
            if(result.data.success){
                NotificationManager.success(result.data.message);
                getCategoryList()
            }else{
                NotificationManager.error(result.data.message);
            }
        })

    }

    return (
        <div className='p-2'>
            <h1>Category List</h1>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Sl. No.</th>
                        <th scope="col" style={{width:"1000px"}}>Name</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categoryList.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td style={{width:"1000px"}}>{item.name}</td>
                                <td><button className='btn btn-primary'onClick={()=>{goto('add-category', item)}}>Edit</button><button className='btn btn-danger mx-2' onClick={()=>{deleteCategoryFun(item.categoryId)}}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <NotificationContainer/>

        </div>
    )
}
