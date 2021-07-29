import React from 'react'
import "../css/home.css"
import "../css/bootstrap.css"

const Footer = () => {
  return(
   <div>
          
     <footer className="mt-5 pb-5">
      <div className="container foot">
          <div className="row pt-3">
              <div className="col-md-4 col-sm-12 col-12 ">
                  <div className="row pt-1">
                      <div className="col-md-3 col-sm-3 col-3">
                          <img src="image/pngfood2.png" className="image-footer image-fluid " alt=""/>
                         
                      </div>
                      <div className="col-md-9 col-sm-9 col-9 ">
                          <img src="image/logo.png" className="logoo  mb-3 image-fluid" alt=""/>
                          <h2>Want To Taste
                              Our Food?</h2>
                              <button className="btn btn-oraange mt-3">Order online</button>
                      </div>
                  </div>
              </div>
              <div className="col-md-4 col-sm-12 col-12 text-center">
                  <h2>About</h2>
                  <ul>
                      <li className="mt-1"><a href="ll">Home</a></li>
                      <li className="mt-1"><a href="ll">Blog</a></li>
                      <li className="mt-1"><a href="ll">Chefs</a></li>
                      <li className="mt-1"><a href="ll">Contact</a></li>
                  </ul>
              </div>
              <div className="col-md-4 col-sm-12 col-12 text-center">
                  <h2>Galery</h2>
                  <div className="row">
                      <div className="col-md-3 col-sm-6 col-3">
                          <img src="image/single_food_4.png" className="h-75 w-75 image-fluid" alt=""/>   
                      </div>
                      <div className="col-md-3 col-sm-6 col-3">
                          <img src="image/lunch-3.jpg" className="h-75 w-75 image-fluid" alt=""/>
                      </div>
                      <div className="col-md-3 col-sm-6 col-3">
                          <img src="image/single_food_4.png" className="h-75 w-75 image-fluid" alt=""/>
                      </div>
                      <div className="col-md-3 col-sm-6 col-3">
                          <img src="image/single_food_6.png" className="h-75 w-75 image-fluid" alt=""/>
                      </div>
                  </div>
               
                  <div className="d-flex">
                      <div >
                          <img src="../image/breakfast-2.jpg" className="h-75 w-75 image-fluid" alt=""/>   
                      </div>
                      <div  >
                          <img src="../image/dinner-3.jpg" className="h-75 w-75 image-fluid" alt=""/>
                      </div>
                      <div >
                          <img src="image/lunch-5.jpg" className="h-75 w-75 image-fluid" alt=""/>
                      </div>
                      <div >
                          <img src="image/lunch-7.jpg" className="h-75 w-75 image-fluid" alt=""/>
                      </div>
                  </div>
                
              </div>


          </div>

       
      </div>
  </footer>
  <div className="container-fluid pied-page text-center pt-3">
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

export default Footer