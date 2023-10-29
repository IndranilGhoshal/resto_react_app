import React, { useEffect, useState } from 'react'
import { user } from '../../service/common'
import { useNavigate } from 'react-router-dom'
import { getcategoryList, productListMenu } from '../../service/Services'
import { IMAGE_URL } from '../../config/config'

export default function BillDashboard() {

  const navigate = useNavigate()

  const [categoryList, setCategoryList] = useState([])
  const [active, setActive] = useState(false)
  const [categoryId, setCategoryId] = useState(null)
  const [products, setProducts] = useState([])

  useEffect(() => {
    if (!user()) {
      navigate("/login")
    }
    

  }, [])


  useEffect(() => {
    console.log("active")
      getcategory()

  }, [])


  useEffect(()=>{
    getProduct()
  }, [categoryId])

  function getcategory() {
    const obj = {

    }
    getcategoryList(obj).then((result) => {
      if (result.data.success) {
        let temp = result.data.response
        for (let obj of temp) {
          obj.isActive = false
        }
        setCategoryList(temp)
      } else {
        setCategoryList([])
      }
    })
  }

  function gotoCategory(item, i) {
    setCategoryId(item.categoryId)
    for (var [index, obj] of categoryList.entries()) {
      if (index === i) {
        obj.isActive = true
      } else {
        obj.isActive = false
      }
    }
  }


  




  function getProduct() {
    const data = {
      categoryId: categoryId
    }
    productListMenu(data).then((result) => {
      if (result.data.success) {
        setProducts(result.data.response)
      } else {
        setProducts([])
      }
    })


  }

  return (
    <div className='container-fluid'>

      <div className='row'>
        <div className='col-sm-8'>
          <div className="menu-nav">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav catmenuul mr-auto">
                  {
                    categoryList.map((item, index) => (
                      <li key={index} className={`nav-item catmenu pointer-cursor ${item.isActive === true ? "active" : ""}`}   >
                        <a className="nav-link" onClick={() => { gotoCategory(item, index) }}>{item.name}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </nav>
          </div>


          <div className='menu-product'>
            <div className='row'>
              {
                products.map((item, index) => (
                  <div key={index} className='col-sm-4'>
                    <div className="card products-menu">
                      <img class="card-img-top" src={IMAGE_URL+item.productPhoto} alt="Card image cap" />
                      <div class="card-body">
                        <h5 class="card-title">{item.name}</h5>
                        <p class="card-text">INR {item.price}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className='col-sm-4'>


        </div>

      </div>







    </div>
  )
}
