import React, { useEffect, useState } from 'react'
import uploadImg from '../../assets/images/upload-img.png'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { addProduct, getcategoryList, uploadFile } from '../../service/Services';
import { IMAGE_URL } from '../../config/config';



export default function AddProduct() {

    const [categoryList, setCategoryList] = useState([]);

    const [productPhoto, setProductPhoto] = useState(null);
    const [name, setName] = useState(null);
    const [categoryId, setCategoryId] = useState(null);
    const [price, setPrice] = useState(null);
    const [color, setColor] = useState(null);
    const [size, setSize] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const [unit, setUnit] = useState(null);

    useEffect(()=>{
        getCategory()

    },[])

    function getCategory(){
        getcategoryList({}).then((result)=>{
            if(result.data.success){
                setCategoryList(result.data.response)
            }else{
                setCategoryList([])
            }
        })
    }

    function showUpload() {
        const image = document.getElementById('file');
        image.click();
    }

    function uploadImgFun() {
        const image = document.getElementById('file');
        const file = image.files;
        console.log(file)
        if (file) {
            const fileData = new FormData();
            fileData.append('file', file[0])
            uploadFile(fileData).then(result => {
                if (result.success) {
                    setProductPhoto(result.fileName)
                } else {
                    NotificationManager.error(result.massage);
                }
            })
        }
    }

    function onSave(){
        if(productPhoto==""|| productPhoto==null|| productPhoto==undefined){
            NotificationManager.error("Product photo required");
            return false;
        }
        if(name==""|| name==null|| name==undefined){
            NotificationManager.error("Product name required");
            return false;
        }
        if(categoryId==""|| categoryId==null|| categoryId==undefined){
            NotificationManager.error("Category type required");
            return false;
        }
        if(price==""|| price==null|| price==undefined){
            NotificationManager.error("Product price required");
            return false;
        }
        if(color==""|| color==null|| color==undefined){
            NotificationManager.error("Product color required");
            return false;
        }
        if(size==""|| size==null|| size==undefined){
            NotificationManager.error("Product size required");
            return false;
        }
        if(quantity==""|| quantity==null|| quantity==undefined){
            NotificationManager.error("Product quantity required");
            return false;
        }
        if(unit==""|| unit==null|| unit==undefined){
            NotificationManager.error("Product photo required");
            return false;
        }


        const data = {
            productPhoto:productPhoto,
            name:name,
            categoryId:categoryId,
            price:price,
            color:color,
            size:size,
            quantity:quantity,
            unit:unit
        }

        addProduct(data).then((result)=>{
            if(result.data.success){
                NotificationManager.success(result.data.message);
                setProductPhoto('')
                setName('')
                setCategoryId('')
                setPrice('')
                setColor('')
                setSize('')
                setQuantity('')
                setUnit('')
            }else{
                NotificationManager.error(result.data.message);
            }
        })


    }



    return (
        <div>
            <div className='form'>
                <div className='form-header'>
                    <div className='login-header-text'>Add Product</div>
                </div>
                <div className='form-body'>
                    <div className='text-field'>
                        <label>Product Photo:</label>
                        <input type="file" id="file" onChange={uploadImgFun} style={{ display: 'none' }} accept="image/jpg,image/jpeg,image/png" />
                        <div className='img-border mt-2 pointer-cursor' onClick={showUpload}>
                            <div className='d-flex align-items-center'>
                                {
                                    productPhoto ? <span>{productPhoto}</span> : <span>Upload png, jpeg, svg photos</span>
                                }
                            </div>
                            <div  className='d-flex justify-content-end upload-img'>
                                {
                                    productPhoto ? <img src={IMAGE_URL+productPhoto} />: <img src={uploadImg} />
                                }
                            </div>
                        </div>
                    </div>
                    <div className='text-field mt-2'>
                        <label>Product Name:</label>
                        <input type="text" className='form-control mt-2' value={name}  onChange={(e)=>{setName(e.target.value)}} />
                    </div>
                    <div className='text-field mt-2'>
                        <label>Category Type:</label>
                        <select className='form-control mt-2'  value={categoryId}  onChange={(e)=>{setCategoryId(e.target.value)}}>
                            <option value=''>Select</option>
                            {
                                categoryList.map((item, index)=>(
                                    <option value={item.categoryId}>{item.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className='text-field mt-2' >
                        <label>Price:</label>
                        <input type="text" className='form-control mt-2' value={price}  onChange={(e)=>{setPrice(e.target.value)}} />
                    </div>
                    <div className='text-field mt-2' >
                        <label>Color:</label>
                        <input type="text" className='form-control mt-2' value={color}  onChange={(e)=>{setColor(e.target.value)}}/>
                    </div>
                    <div className='text-field mt-2' >
                        <label>Size:</label>
                        <select className='form-control mt-2' value={size}  onChange={(e)=>{setSize(e.target.value)}}>
                            <option value="">Select</option>
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                            <option value="XXXL">XXXL</option>
                            <option value="None">None</option>
                        </select>
                    </div>
                    <div className='text-field mt-2' >
                        <label>Quantity:</label>
                        <input type="text" className='form-control mt-2'  value={quantity}  onChange={(e)=>{setQuantity(e.target.value)}}/>
                    </div>
                    <div className='text-field mt-2' >
                        <label>Unit:</label>
                        <select className='form-control mt-2' value={unit}  onChange={(e)=>{setUnit(e.target.value)}}>
                            <option value="">Select</option>
                            <option value="Dozon">Dozon</option>
                            <option value="Gram">Gram</option>
                            <option value="Kilogram">Kilogram</option>
                            <option value="Pice">Pice</option>
                            <option value="None">None</option>
                        </select>
                    </div>
                    <div className='login-button mt-2' value={name}  onChange={(e)=>{setName(e.target.value)}}>
                        <button type="button" className='login-btn' onClick={onSave} >Save</button>
                    </div>
                </div>
            </div>
            <NotificationContainer />

        </div>
    )
}
