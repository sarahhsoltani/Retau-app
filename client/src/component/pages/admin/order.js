import React ,{useEffect}from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {  getOrderAPI} from "../../../redux/actions/order";
import NavbarAdmin from './navbarAdmin';
import { Table } from 'reactstrap';
const Order = () => {
    const dispatch = useDispatch()
    const orders = useSelector(state => state.orderReducer.orders)
  useEffect(() => {
  dispatch(getOrderAPI())
     }, [dispatch])
  console.log("orders",orders)
  return(
    <div>
       <NavbarAdmin/>
       <h2 className="mt-6 text-center mb-3"> Our orders  <i class="fad fa-utensils-alt"></i></h2>
  <div className="container ">
 
         <Table >
         <thead>
           <tr>
             <th>Nom</th>
             <th>Address</th>
             <th>Number</th>
             <th>Quantity</th>
             <th>validation</th>
             <th>Actions</th>
           </tr>
         </thead>
         {
      orders.map((el,key)=>(
         <tbody key={key}>
           <tr>
           <td>{el.nom}</td>
             <td>{el.address}</td>
             <td>{el.number}</td>
             <td>{el.quantity}</td>
             <td>{el.validation}</td>
             <td><button className="btn btn-danger">delete <i class="fas me-2 fa-minus-circle"></i></button></td>
           </tr>
         </tbody>
          ))
         }
       </Table>
     
  </div>
    </div>
   )

 }

export default Order