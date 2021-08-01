import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/home.css'
import NavbarAdmin from './navbarAdmin'
const AdminDhash = () => {


  return(
    <div>
  <NavbarAdmin/>
   
   <div className="d-flex">
    <div className="col-md-9">
    {/* ------------- Start Section One all services  -------------------*/}
   <div className="container mt-5">
   <div className="col-md-12 ">
   <div className='row ' >
     <div className="col-md-6">
    <Link className="text-dark linkto" to="/product">
    <div className="card mb-3 w-10 mt-5" >
  <div className="row g-0">
    <div className="col-md-4">
    <i className="fas fa-cheeseburger burger"></i>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Our Products</h5>
        <h1 className="card-text">75%</h1>
        <div className="progress">
  <div className="progress-bar bg-success prog1" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
      </div>
    </div>
  </div>
</div>
    </Link>
 </div>    

     <div className="col-md-6">
    <Link className="text-dark linkto" to="/order">
    <div className="card mb-3 w-10 mt-5" >
  <div className="row g-0">
    <div className="col-md-4">
    <i className="fab fa-first-order burger"></i>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Our Orders</h5>
        <h1 className="card-text"> 45%</h1>
        <div className="progress">
  <div className="progress-bar bg-danger prog2" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
      </div>
    </div>
  </div>
</div>
    </Link>
    </div>   
    </div>
   {/* ----------------------- second  ------------------------ */}
   <div className='row'>
     <div className="col-md-6">
     <div className="card mb-3 w-10" >
  <div className="row g-0">
    <div className="col-md-4">
   
    <i className="fas fa-user-cog cog"></i>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Our Clients</h5>
        <h1 className="card-text">62%</h1>
        <div className="progress">
  <div className="progress-bar bg-warning prog3" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
      </div>
    </div>
  </div>
</div>
     </div>    
     <div className="col-md-6">
     <div className="card mb-3 w-10" >
  <div className="row g-0">
    <div className="col-md-4">
  
    <i className="fas fa-cogs cog"></i>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Setting</h5>
        <h1 className="card-text"> 90%</h1>
        <div className="progress">
  <div className="progress-bar bg-info prog4" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
      </div>
    </div>
  </div>
</div>
    </div>   
    </div>
   </div>
   </div>
    </div>
    <div className="col-md-3 mt-3 ">
        <img className="mt-4" src="image/scc.png" alt="..."/>
    </div>
   </div>
   
   
   {/* ------------- End Section One all services  -------------------*/}
      {/* --------------Start Section two -------------- */}
     <div className="container">
         <div className="row mt-5 mb-5" >
            <div className="col-md-3 ">
            <div className="card mb-3  px-3" >
  <div className="row g-0">
    <div className="col-md-2">
  
    <i className="fab fa-facebook mt-3 fa-3x  me-4 text-primary"></i>
    </div>
    <div className="col-md-10">
      <div className="card-body">
        <h5 className="card-title text-primary ">50k Likes</h5>
        <p className="card-text"> You main list growing</p>
      
      </div>
    </div>
  </div>
</div>
</div>
            {/*-------card 2  */}
            <div className="col-md-3">
            <div className="card mb-3   px-3" >
  <div className="row g-0">
    <div className="col-md-2">
  
    <i className="fab fa-twitter-square mt-3 fa-2x me-4 twitter"></i>
    </div>
    <div className="col-md-10">
      <div className="card-body">
        <h5 className="card-title twitter">30k Followers</h5>
        <p className="card-text">  You main list growing</p>
     
      </div>
    </div>
  </div>
</div>
</div>
<div className="col-md-3">
            <div className="card mb-3   px-3" >
  <div className="row g-0">
    <div className="col-md-2">
  
    <i className="fab fa-youtube mt-3 fa-2x me-4 text-danger"></i>
    </div>
    <div className="col-md-10">
      <div className="card-body">
        <h5 className="card-title text-danger">50k Subscribers</h5>
        <p className="card-text">You main list growing</p>
       
      </div>
    </div>
  </div>
</div>
</div>
<div className="col-md-3">
            <div className="card mb-3   px-3" >
  <div className="row g-0">
    <div className="col-md-2">
  
    <i className="fab fa-linkedin-in mt-3 fa-2x me-4 linkdin"></i>
    </div>
    <div className="col-md-10">
      <div className="card-body">
        <h5 className="card-title linkdin">7k Connections</h5>
        <p className="card-text"> You main list growing</p>
     
      </div>
    </div>
  </div>
</div>
</div>

         </div>
     </div>
     {/* -------------End Section two */}
          

      <footer>
          <div className="container-fluid pied-page text-center pt-3 mt-5">
      <div className="row">
       
       <div className="col-md-10 pt-2 pb-3">
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
          </footer>
    </div>
   )

 }

export default AdminDhash