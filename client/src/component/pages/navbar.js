import React from 'react'
import "../css/home.css"
import "../css/bootstrap.css"
import {Link} from 'react-router-dom'

const Navbar = () => {
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
                  <Link  className="nav-link" to="/dashboard">Dashboard</Link>
                    
                  </li>
                  <li className="nav-item">
                    <Link to="/dashboard" className="nav-link">Panier <i class="fas fa-shopping-basket"></i> </Link>  
                  </li>
                  <li className="nav-item">
                  <Link to="/contact" className="nav-link"  >Contact</Link>     
                  </li>
                </ul>
                <div className="d-flex">
                  <div className="to-search search-switch">
                    <button className="btn btn-orange">Make reservation</button>
                    <i className="fa fa-search  "></i>
                    <a href="kkk"><i className="fab fa-facebook me-2"></i></a>
              <a href="kkk"><i className="fab fa-twitter me-2"></i></a>
              <a href="kkk"><i className="fab fa-youtube me-2"></i></a>
              <a href="kkk"><i className="fab fa-instagram"></i></a>
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

export default Navbar