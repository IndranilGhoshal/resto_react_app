import React, { useEffect } from 'react'
import {user} from '../../service/common'
import { useNavigate } from 'react-router-dom'

export default function BillDashboard() {

  const navigate = useNavigate()

  useEffect(()=>{
    if(!user()){
      navigate("/login")
    }
  },[])

  

  return (
    <div className='container-fluid'>BillDashboard</div>
  )
}
