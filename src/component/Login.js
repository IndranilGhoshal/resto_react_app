import React, { useState, useEffect } from 'react'
import logo from '../assets/images/resto-logo.png'
import { useNavigate } from 'react-router-dom'
import {user} from '../service/common'


export default function Login() {
    const navigate = useNavigate()

    useEffect(() => {
        if (user()) {
            navigate("/")
        }
    }, [])

    const [type, setType] = useState("password")
    const [typeClass, setTypeClass] = useState(true)


    const showHideFun = () => {
        if (typeClass == true) {
            setType("text")
            setTypeClass(false)
        } else {
            setType("password")
            setTypeClass(true)
        }
    }

    const onSubmit = () => {
        localStorage.setItem("user", "admin")
        navigate('/')
    }


    return (
        <div>
            <div className='form'>
                <div className='form-header'>
                    <div className='image-div'>
                        <img src={logo} className="login-image" />
                    </div>
                    <div className='login-header-text'>Login</div>
                </div>
                <div className='form-body'>
                    <div className='text-field'>
                        <label>Email:</label>
                        <input type="text" className='form-control' />
                    </div>
                    <div className='text-field'>
                        <label>Password:</label>
                        <div className="input-group mb-2">
                            <input type={type} className="form-control" id="inlineFormInputGroup" />
                            <div className="input-group-prepend">
                                <div className="input-group-text"><i className={`${typeClass ? "fa fa-eye-slash" : "fa fa-eye"}`} style={{ padding: "5px" }} onClick={() => showHideFun()}></i></div>
                            </div>
                        </div>
                    </div>
                    <div className='login-button'>
                        <button type="button" className='login-btn' onClick={() => onSubmit()} >Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
