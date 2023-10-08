import React, { useState, useEffect } from 'react'
import logo from '../assets/images/resto-logo.png'
import { useNavigate } from 'react-router-dom'
import { user } from '../service/common'
import { login } from '../service/Services'
import {NotificationContainer, NotificationManager} from 'react-notifications';


export default function Login() {
    const navigate = useNavigate()

    useEffect(() => {
        if (user()) {
            navigate("/")
        }
    }, [])

    const [type, setType] = useState("password")
    const [typeClass, setTypeClass] = useState(true)


    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")


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

        if(email==""|| email==null|| email==undefined){
            NotificationManager.error("Email Required");
            return false;
        }

        if(password==""|| password==null|| password==undefined){
            NotificationManager.error("Password Required");
            return false;
        }

        const data = {
            "email": email,
            "password": password
        }

        login(data).then((response) => {
            if (response.data.success) {
                localStorage.setItem("user", response.data.result)
                navigate('/')
            }else{
                NotificationManager.error(response.data.message);
            }
        })
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
                        <input type="text" className='form-control' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className='text-field'>
                        <label>Password:</label>
                        <div className="input-group mb-2">
                            <input type={type} className="form-control" id="inlineFormInputGroup" value={password} onChange={(e) => { setPassword(e.target.value) }} />
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
            <NotificationContainer/>
        </div>
    )
}
