import React from 'react'


export default function Login() {
    return (
        <div>
            <div className='form'>
                <div className='form-header'>
                    <h1>Login</h1>
                </div>
                <div className='form-body'>
                    <div className='text-field'>
                        <label>Email:</label>
                        <input type="text" />
                    </div>
                    <div className='text-field'>
                        <label>Password:</label>
                        <input type="password" />
                    </div>
                    <div className='login-button'>
                        <button type="button" >Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
