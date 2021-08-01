import React from 'react'
import {Form,Modal} from "react-bootstrap"
import {useState} from 'react';
import { Button } from 'semantic-ui-react'
import {useDispatch} from 'react-redux'
import 'semantic-ui-css/semantic.min.css'
import {addOrderApi} from "../../redux/actions/order"

const AddOrder = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()

const [inputOrder,setinputOrder]=useState({nom:"",address:"", number:"" ,quantity:"",validation:""})

const hanleChange=(e)=>{
    const {name,value}=e.target
    setinputOrder({
        ...inputOrder,
        [name]:value
    })
    console.log("inputOrder",inputOrder)
}
const addOrder=()=>{
dispatch (addOrderApi(inputOrder.nom, inputOrder.address,inputOrder.number ,inputOrder.quantity,inputOrder.validation)) 
console.log("my order",inputOrder)
setShow(false)

}
  return(
    <div>
    <div className="container">

<Button color='yellow' className="px-5" onClick={handleShow}>Order</Button>
<Modal show={show} onHide={handleClose}>
<Modal.Header >

<Modal.Title className="title-modal">Add New Menu</Modal.Title>
</Modal.Header>
<Modal.Body>
<Form >
<Form.Group controlId="formBasicEmail">
<Form.Label>Nom</Form.Label>
<Form.Control type="text" placeholder="enter your name plz..." name='nom' onChange={hanleChange} />

</Form.Group><Form.Group controlId="formBasicPassword">
<Form.Label>Address</Form.Label>
<Form.Control type="text" placeholder="enter year"  name='address' onChange={hanleChange}  />
</Form.Group>


<Form.Group controlId="formBasicPassword">
<Form.Label>Number</Form.Label>
<Form.Control type="text" placeholder="enter image"  name='number' onChange={hanleChange}   />
</Form.Group>

<Form.Group controlId="formBasicPassword">
<Form.Label>quantity</Form.Label>
<Form.Control type="text" placeholder="enter description"  name="quantity" onChange={hanleChange}   />
</Form.Group>

<Form.Group controlId="formBasicPassword">
<Form.Label>Validation</Form.Label>
<Form.Control type="text" placeholder="enter description"  name="validation" onChange={hanleChange}   />
</Form.Group>

<Button   className="ms-3  me-3  px-5  mt-3"  onClick={handleClose} color='black'>Close</Button>


<Button
className="  px-5 mt-3" color='green' onClick={addOrder}>Save </Button>
</Form>
</Modal.Body>



</Modal>
</div>
</div>
   )

 }

export default AddOrder

      