import React from 'react'
import uploadImg from '../../assets/images/upload-img.png'

export default function AddProduct() {
    return (
        <div>
            <div className='form'>
                <div className='form-header'>
                    <div className='login-header-text'>Add Product</div>
                </div>
                <div className='form-body'>
                    <div className='text-field'>
                        <label>Product Photo:</label>
                        <div className='img-border mt-2'> 
                        <div className='d-flex align-items-center'>
                            <span>Upload png, jpeg, svg photos</span>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <img src={uploadImg} className="upload-img"/>
                        </div>

                        </div>
                    </div>
                    <div className='text-field mt-2'>
                        <label>Product Name:</label>
                        <input type="text" className='form-control mt-2' />
                    </div>
                    <div className='text-field mt-2'>
                        <label>Category Type:</label>
                        <select className='form-control mt-2'>
                            <option>Select</option>
                        </select>
                    </div>
                    <div className='text-field mt-2'>
                        <label>Price:</label>
                        <input type="text" className='form-control mt-2' />
                    </div>
                    <div className='text-field mt-2'>
                        <label>Color:</label>
                        <input type="text" className='form-control mt-2' />
                    </div>
                    <div className='text-field mt-2'>
                        <label>Size:</label>
                        <input type="text" className='form-control mt-2' />
                    </div>
                    <div className='text-field mt-2'>
                        <label>Quantity:</label>
                        <input type="text" className='form-control mt-2' />
                    </div>
                    <div className='text-field mt-2'>
                        <label>Unit:</label>
                        <select className='form-control mt-2'>
                            <option>Select</option>
                        </select>
                    </div>
                    <div className='login-button mt-2'>
                        <button type="button" className='login-btn' >Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
