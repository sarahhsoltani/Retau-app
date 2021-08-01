import React, {useEffect } from 'react'
import "../css/home.css"
import "../css/bootstrap.css"
import Navbar from './navbar'
import Footer from './footer'
import {useSelector,useDispatch} from 'react-redux'
import {getMenuAPI} from "../../redux/actions/menu"
import { Link } from 'react-router-dom'
import AddOrder from './addOrder'
const Home = () => {
  const datas = useSelector(state => state.menuReducer.datas)


const dispatch = useDispatch()

  useEffect(() => {
  dispatch(getMenuAPI())
     }, [dispatch])
  console.log("my data",datas)
  return(
    <div>
        <Navbar/>
       
          <div className="section-one">
        <div className="banner-section">
          <div className="row text-md-center">
            <div className="col-md-4 iimg">
              <img
                src="image/plate.png "
                className=" imagefont mt-4"
                alt=""
              />
            </div>
            <div className="col-md-8 title-one  text-center " >
              <h1 className="me-2 title-one mtt-2 " >
                The Spectacle 
                <span>  Before Us <br />
                  Was Indeed </span >Sublime.</h1>
              <p className="d-none d-md-block first-para   ">
                Apparently, we had reached a great height in the atmosphere, for <br/>
                the sky was a dead black, and which lifts the horizon of the sea <br/>
                to the level of the spectator on a hillside.
              </p>
              <div className="d-flex justify-content-center mt-3  ">
            
                  <button className="btn btn-oraange me-3 mb-5">Sign In</button>
              
                  <button  className="btn btn-orangee mb-5">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 col-sm-12 col-12 mt-5 image-1  ">
            <img src="image/about.jpg" className="img-fluid w-100 h-100 mt-5" alt=""/>
           
          </div>
          <div className="col-md-3 mt-5">
            <img src="image/about-1.jpg" className="img-fluid w-100 h-100 image-2  " alt=""/>
          </div>
          <div className="col-md-5 col-sm-12 col-12  text-center ">
           
            <h3>About Us </h3>
            <h1 className="title-about">Who Are We?</h1>
           
          <p className="first-para">We are a chain of theme restaurant founded in 1971 in London. In 1979, the cafe began covering its walls with rock and roll memorabilia, a tradition which expanded to others in the chain.

          </p>
          <span>Mon - Fri <strong>8 AM</strong> - <strong>11 PM</strong></span>
          <h1 className="number">+216- 25-505-632</h1>
          </div>
        </div>
      </div>
   
      <div className="container choose mt-5 text-center">
          <h3 className="mt-3"> Why Choose Us ?</h3>
          <div className="row justify-content-center mt-5" >
            <div className="col-md-3 col-sm-6 col-6 fun-fact me-3">
              <div className="chiffre justify-content-center  mt-3 ms-5">
                <h2 >18</h2>
              </div>
              <p className="mt-2">YEARS OF EXPERIENCED</p>
            </div>
          
            <div className="col-md-3 col-sm-6 col-6 fun-fact me-4">
              <div className="chiffre justify-content-center mt-3 ms-5">
                <h2 >100</h2>
              </div>
              <p className="mt-2">Menus/Dish</p>
            </div>
       
            <div className="col-md-3 col-sm-6 col-6 fun-fact me-4">
              <div className="chiffre justify-content-center mt-3 ms-5">
                <h2 >50</h2>
              </div>
              <p className="mt-2">Staffs </p>
           
            </div>
         

            <div className="col-md-3 col-sm-6 col-6 fun-fact">
              <div className="chiffre justify-content-center mt-3 ms-5">
                <h2 >15,000</h2>
              </div>
              <p className="mt-2">Happy of Customers </p>
           
            </div>
            </div>
            </div>
     
      <div className="container mt-5">
           <div className="row history" >
             <div className="col-md-5 col-sm-12 col-12 ">
               <img src="image/about.png" className="image-fluid h-90 w-100 image-onee" alt=""/>
             </div>
             <div className="col-md-5 col-sm-12 col-12">
               <h5>Our History</h5>
               <h2>Where The Food’s As Good As The Root Beer.</h2>
               <h4>Satisfying people hunger for simple pleasures</h4>
               <p>May over was. Be signs two. Spirit. Brought said dry own firmament lesser best sixth deep abundantly bearing, him, gathering you blessed bearing he our position best ticket in month hole deep</p>
               <button className="btn btn-oraange mt-4">Read More</button>
             </div>
             <div className="d-none d-md-block  col-md-2 col-sm-12 col-12">
               <img src="image/about_overlay.png" alt=""/>
             </div>
           </div>
         </div>
     
         <div className="container text-center">
           <div className="title-menu">
             <h1>Delicious Menu</h1>
             <div className=" my-para mb-5"><p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
             
             </div>
            <div className="d-flex justify-content-around " >
            {datas.map((el,key )=> (
              
              <div className="card w-25 " key={key}>
                <Link to={`/details/${el._id}`}>
              <img src={el.image} className="card-img-top" alt="..."/>
              </Link>
              <div className="card-body">
              
              <h5 className="card-title">{el.title}</h5>
             
                <p className="card-text">{el.description}</p>
               <div  className="d-flex justify-content-around">
               <p className="card-text"><small className="menu-price">{el.price}</small></p>
                {/* <Link to={`/details/${el._id}`}>
                 
                  </Link> */}
                  <AddOrder/>
               </div>
              </div>
            </div>
           
        ))} 
            </div>
            </div>
            </div>
            {/* event */}
            <h1  className="text-center my-4 ">Events</h1>
           <div className="container-fluid events">
           
       <div className="row">
    <div className="col-md-6">
     <img className="image-fluid w-100 h-100" src="image/event-02.jpg" alt=""/>
    </div>
    <div className="col-md-6 ">
     <div className="event-bg bg-white mt-5">
      <h1 className="pt-3">Wines during specific night</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing  maiores cupiditate aliquam  corrupti beatae expedita officiis soluta quidem sit odio vitae!</p>
      <div className="row timing">
        <div className="col-md-3 col-sm-3 col-3 ">
          <h2>25</h2>
          <p>Days</p>
        </div>
        <div className="col-md-3  col-sm-3 col-3">
         <h2>12</h2>
         <p>Days</p>
       </div>
       <div className="col-md-3 col-sm-3 col-3">
         <h2>48</h2>
         <p>Days</p>
       </div>
       <div className="col-md-3 col-sm-3 col-3">
         <h2>05</h2>
         <p>Days</p>
       </div>
      </div>
      <a class="pb-2" href="#">View Details  <i class="fas fa-share "></i></a>
     </div>
    </div>
       </div>
           </div>
 <Footer/>
    </div>
   )

 }

export default Home