import React from 'react'
import {useEffect} from "react"
import {useSelector,useDispatch} from 'react-redux'
import {getMenuAPI,deleteMenu} from "../../../redux/actions/menu"
import { Link } from 'react-router-dom'
import AddMenu from './addMenu'
import {useState} from 'react';
import {Spinner} from "react-bootstrap"
import UpdateMenu from './updateMenu'

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
    </div>
   )

 }

export default Dashboard