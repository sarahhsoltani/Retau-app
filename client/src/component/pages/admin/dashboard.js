import React from 'react'
import {useEffect} from "react"
import {useSelector,useDispatch} from 'react-redux'
import {getMenuAPI,deleteMenu} from "../../../redux/actions/menu"
import { Link } from 'react-router-dom'
import AddMenu from './addMenu'
import {useState} from 'react';
import {Spinner} from "react-bootstrap"
import UpdateMenu from './updateMenu'
import '../../css/home.css'
const Dashboard = () => {
const datas = useSelector(state => state.menuReducer.datas)
const loading = useSelector(state => state.menuReducer.loading)
const dispatch = useDispatch()
const [input,setInput]=useState({title:"",price:"", image:"" ,description:""})

const hanleChange=(e)=>{
    const {name,value}=e.target
    setInput({
        ...input,
        [name]:value
    })
    console.log("input",input)
}
//getMenu
  useEffect(() => {
  dispatch(getMenuAPI())
     }, [dispatch])
  console.log("my data",datas)
  //DeleteMenu
  const deleteMenuu=(id)=>{
    dispatch (deleteMenu(id)) 
    // console.log(deleteMenu(id))
  }
  return(
    <div>
       <header>
    
    <div className="header-section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand me-5" href="ddd"
              ><img src="image/logo.png " alt=""
            /></a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link  to="/" className="nav-link active" aria-current="page"  >  Home</Link>  
                 
                </li>
              
                <li className="nav-item">
                <Link  className="nav-link" to="/dashboard">Orders</Link>
                  
                </li>
                <li className="nav-item">
                  <Link to="/dashboard" className="nav-link">Users</Link>  
                </li>
                <li className="nav-item">
                <Link to="/contact" className="nav-link"  >Products</Link>     
                </li>
              </ul>
              <div >
                <div className="to-search search-switch">
                  <input type="text" placeholder="search product...." className="btn btn-orange"/>
                 
                  
                 
                  <a href="kkk" className="admin"> Admin <i className="fas fa-user-tie "></i></a>
                 
            
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
   
      {/* --------------End Navbar-------------- */}
      <Link to="/">Back</Link>
      <AddMenu/>
      
      {loading? <div className="text-center w-100"> <Spinner animation="grow" variant="success" />
              <Spinner animation="grow" variant="danger" />
              <Spinner animation="grow" variant="warning" /></div> :
      datas.length===0 ? <div > Aucune publication disponible actuellement</div>:
       <div className="d-flex justify-content-around mt-5" >
            {datas.map((el,key )=> (
              <div className="card w-25 text-center" key={key}>
              <img src={el.image} className="card-img-top" alt="..."/>
              <div className="card-body">
              <h5 className="card-title">{el.title}</h5>
                <p className="card-text">{el.description}</p>
                <p className="card-text"><small className="menu-price">{el.price}</small></p>
                <div className="d-flex justify-content-around">
                <button className="btn btn-danger mt-5 h-25" onClick={() => deleteMenuu(el._id)}>supprimer</button>
                <UpdateMenu id={el._id}  el={el}/>
                </div>
              </div>
            </div>
        ))} 
            </div> }

            <div className="container-fluid pied-page text-center pt-3 mt-5">
      <div className="row">
       
       <div className="col-md-10">
           <p>Copyright ©2021 All rights reserved | By Sarah </p>
       </div>
       <div className="col-md-2">
          
              
              <a href="kkk"><i className="fab fa-facebook me-2"></i></a>
              <a href="kkk"><i className="fab fa-twitter me-2"></i></a>
              <a href="kkk"><i className="fab fa-youtube me-2"></i></a>
              <a href="kkk"><i className="fab fa-instagram"></i></a>
      
          
       </div>
      </div>
   </div>
    </div>
   )

 }

export default Dashboard