import React ,{useEffect }from 'react'
import Navbar from './navbar'
import {getOneMenu}from "../../redux/actions/menu"
import {useSelector,useDispatch} from 'react-redux'
const Details  = (props) => {

  const dispatch = useDispatch()
  const data = useSelector(state => state.menuReducer.data)
  useEffect((id) => {
  dispatch(getOneMenu())
     }, [dispatch])
  console.log("my data")
  return(
    <div>
   <Navbar/>
  <h1 className="mt-5">ccccccccccccc</h1>

    </div>
   )

 }

export default Details