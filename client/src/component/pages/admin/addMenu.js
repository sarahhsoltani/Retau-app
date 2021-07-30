import React from 'react'
import {Form,Button,Modal} from "react-bootstrap"
import {useState} from 'react';
import {addMenuApi} from "../../../redux/actions/menu"
import {useDispatch} from 'react-redux'
const AddMenu = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
const addNewMenu=()=>{
dispatch (addMenuApi(input.title, input.price,input.image ,input.description)) 
console.log("inpuuuuuuuuuuuut",input)
setShow(false)
}
  return(
    <div>
    <div className='container mt-5'>
 <Button className="btn btn-oraange " onClick={handleShow}>
   Add Menu
</Button>

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title className="title-modal">Add Menu</Modal.Title>
</Modal.Header>
<Modal.Body>
<Form >
<Form.Group controlId="formBasicEmail">
<Form.Label>Title</Form.Label>
<Form.Control type="text" placeholder="title" name='title' onChange={hanleChange} />

</Form.Group><Form.Group controlId="formBasicPassword">
<Form.Label>price</Form.Label>
<Form.Control type="text" placeholder="enter year"  name='price' onChange={hanleChange}  />
</Form.Group>


<Form.Group controlId="formBasicPassword">
<Form.Label>image</Form.Label>
<Form.Control type="text" placeholder="enter image"  name='image' onChange={hanleChange}   />
</Form.Group>



<Form.Group controlId="formBasicPassword">
<Form.Label>description</Form.Label>
<Form.Control type="text" placeholder="enter description"  name="description" onChange={hanleChange}   />
</Form.Group>
<Button className="ms-3  mt-3" variant="secondary" onClick={handleClose}>  
Close
</Button>

<Button  onClick={addNewMenu}>add</Button>
</Form>
</Modal.Body>



</Modal>
</div>
</div>
   )

 }

export default AddMenu

      