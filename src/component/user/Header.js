import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import logo from '../../assets/images/resto-logo.png'
export default function Header() {
  const navigate = useNavigate()
  const onLogout = () =>{
    localStorage.clear()
    navigate('/login')
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand mx-3" href="#"><img src={logo} className="header-logo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Bill Dashboard <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Add Category </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Add Product </a>
            </li>
          </ul>
          <span style={{flex:"1"}}></span>
          <span class="navbar-text">
            <button className='logout-btn mx-3' onClick={()=>onLogout()}>Logout</button>
          </span>
        </div>
      </nav>
      <Outlet />

      <Footer />
    </div>
  )
}
