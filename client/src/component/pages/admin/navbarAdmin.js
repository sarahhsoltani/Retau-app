import React from 'react'
import '../../css/home.css'
import { Link } from 'react-router-dom'
const NavbarAdmin = () => {
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
                <Link  className="nav-link" to="/order">Orders</Link>
                  
                </li>
                <li className="nav-item">
                  <Link to="/dashboard" className="nav-link">Users</Link>  
                </li>
                <li className="nav-item">
                <Link to="/product" className="nav-link"  >Products</Link>     
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
    </div>
   )

 }

export default NavbarAdmin