import React, { useEffect, useState } from 'react'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { objSharedResponse } from '../../service/common';
import { addCategory, categoryUpdate } from '../../service/Services';
import { useNavigate } from 'react-router-dom';

export default function AddCategory() {

    const navigate = useNavigate()

    const [isEdit, setIsEdit]=useState(false)
    const [name, setName] = useState('')


    useEffect(()=>{
        if(objSharedResponse().name){
            setIsEdit(true)
            setName(objSharedResponse().name)
        }

    }, [])


    const onSubmit=()=>{

        if(name===''|| name===null|| name===undefined){
            NotificationManager.error("Category name required");
            return false;
        }

        const data = {
            "name":name
        }

        addCategory(data).then((result)=>{
            console.log(result)
            if(result.data.success){
                NotificationManager.success(result.data.message);
                setName('')
            }else{
                NotificationManager.error(result.data.message);
            }
        })
    }

    const onEdit=()=>{

        if(name===''|| name===null|| name===undefined){
            NotificationManager.error("Category name required");
            return false;
        }

        const data = {
            "name":name,
            "categoryId":objSharedResponse().categoryId
        }

        categoryUpdate(data).then((result)=>{
            console.log(result)
            if(result.data.success){
                NotificationManager.success(result.data.message);
            }else{
                NotificationManager.error(result.data.message);
            }
        })



    }

    return (
        <div>
            <div className='form'>
                <div className='form-header'>
                    {
                        isEdit?<div className='login-header-text'>Edit Category</div>:<div className='login-header-text'>Add Category</div>
                    }
                    
                </div>
                <div className='form-body'>
                    <div className='text-field'>
                        <label>Category Name:</label>
                        <input type="text" className='form-control mt-2' value={name} onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div className='login-button mt-2'>
                        {
                        isEdit? 
                        <button type="button" className='login-btn' onClick={onEdit} >Save</button>
                        :
                        <button type="button" className='login-btn' onClick={onSubmit} >Save</button>
                        }
                    </div>
                </div>
            </div>
            <NotificationContainer/>
        </div>
        
    )
}
