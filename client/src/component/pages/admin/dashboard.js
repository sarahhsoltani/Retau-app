import React from 'react'
import {useEffect} from "react"
import {useSelector,useDispatch} from 'react-redux'
import {getMenuAPI} from "../../../redux/actions/menu"
import { Link } from 'react-router-dom'
import AddMenu from './addMenu'


const Dashboard = () => {
const datas = useSelector(state => state.menuReducer.datas)
const loading = useSelector(state => state.menuReducer.loading)

const dispatch = useDispatch()

  useEffect(() => {
  dispatch(getMenuAPI())
     }, [dispatch])
  console.log("my data",datas)
  return(
    <div>
      <Link to="/">Back</Link>
      <AddMenu/>
      
      {loading? "loading...." :
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
                <button className="btn btn-danger">supprimer</button>
                <button className="btn btn-warning">modifier</button>
                </div>
              </div>
            </div>
        ))} 
            </div> }
    </div>
   )

 }

export default Dashboard