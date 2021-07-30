import React from 'react'
import Navbar from "../pages/navbar"
import Footer from './footer'



const Contact = () => {
  return(
  <div>
      <Navbar/>
      <div class="container-fluid ">
            <div class="contact">
                <div class=" ms-5 mt-4 text-white mt-5">
                    <h1 class="ptt-5">Contact Us</h1>
                    <p>Home <i class="fas fa-long-arrow-alt-right"></i>Contact <i class="ion-ios-arrow-forward"></i></p>
                </div>
            </div>
        </div>

        
        <div class="row mt-5 " >
                <div class="col-md-4 col-sm-12 col-12 infos card-1  p-2 ms-4" >
               <p class="pt-4"><i class="fas fa-search-location"></i> Av. Paz Soldán 290, San
                Isidro, Lima 27 - Peru</p>
                <p><i class="fas fa-phone-volume"></i> +216 442-2777</p>
                  <p><i class="fas fa-envelope-square"></i> mail@restaurantpro.com</p>
                  <img class="h-25 w-50 mt-4" src="image/lunch-5.jpg" alt=""/>
                </div>
              
               <div class="col-md-4 col-sm-12 col-12 infos  card-2 p-2 ">
                <p class="hours text-center">Hours of Service</p>
                 <p>Monday to Saturday</p>
                    <div class="time">
                        <p>1:00 pm - 3:00 pm and</p>
                 <p>7:00 pm - 11:00 pm</p>
                    </div>
                   <p>Sunday</p>
                   <p class="time">12:30 pm - 3:30 pm</p>
                 </div>
                 
                     <div class="col-md-4 infos  p-2 ">
                        <div class="row ">
                            <div class="col-md-8 col-sm-8 col-8 mt-3">
                                <p class="nos">Telephone support:</p>
                                <p>Monday to Saturday from</p>
                                <p>9:00 am to 9:00 pm</p>

                            </div>
                            <div class="col-md-4 col-sm-4 col-4 "> <img src="image/kisspng-soup.png" class="w-100 h-100 image-fluid" alt=""/></div>
                           
                        </div>
                            
                                <button class="btn btn-reserver mt-4">Make a reservation</button>
                         
                        
                         </div>
            </div>
{/* formulaire */}


<div class="container text-center mt-5 formulaire">
            <h2>
                Feel free to drop us a line!

            </h2>
            <p>Let's talk if you have any query or suggestion. We are open to learn from you. <br/> So don't hesitate to reach us anytime.</p>

            <div class="container mt-5" >
                <div class="row">
                    <div class="col-md-6">
                        <input class="form-control " type="text" placeholder="Your Name"/>
                        <input class="form-control mt-2" type="text" placeholder="Your Subject"/>
                        <input class="form-control mt-2" type="text" placeholder="Email Address"/>
                        <div class="form-check">
                            <input class="form-check-input mt-2" type="checkbox" id="gridCheck"/>
                            Send me a copy
                          </div>

                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            
                            <textarea class="form-control" placeholder="Tape your message here" id="exampleFormControlTextarea1" col="3" rows="5"></textarea>
                            <button class="btn btn-reserver mt-4">Give us a shot</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

<Footer/>
  </div>
   )

 }

export default Contact