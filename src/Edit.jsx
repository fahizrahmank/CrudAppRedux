import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateuser } from './userReducer';
import { useRef } from 'react';



function Edit() {
    const {id} = useParams()
    const users =   useSelector((state) => state.users);
    const existing = users.filter((e) => e.id == id) 
    const dispatch =  useDispatch()
    const reff = useRef(null)
    const nav = useNavigate()



    const handlesubmit = () => { 
        const name = reff.current.username.value
        const email =  reff.current.useremail.value
    
        dispatch(updateuser({
            id:id,name:name, email:email
         }))
         nav('/')
    }

  return (
    <div style={{backgroundColor:'grey',height:'300px',width:'60%',marginLeft:'12%'}}>
    <div style={{width:'70%',marginLeft:'10%',marginTop:'5%'}}>
        <br /><br /><br />
            {existing.map((e) => (
        <form key={e.id} onSubmit={(e)=>e.preventDefault()} ref={reff}>
     <InputGroup size="lg">
     <InputGroup.Text id="inputGroup-sizing-lg" >Name</InputGroup.Text>
     <Form.Control
       aria-label="Large"
       aria-describedby="inputGroup-sizing-sm"
       name='username'
       defaultValue={e.name}
     />
   </InputGroup><br /><br />
   <InputGroup size="lg">
     <InputGroup.Text id="inputGroup-sizing-lg" >Email</InputGroup.Text>
     <Form.Control
       aria-label="Large"
       aria-describedby="inputGroup-sizing-sm"
       name='useremail'
       defaultValue={e.email}
     />
   </InputGroup><br />
      </form>
            ))}
         
      <Button variant="primary" onClick={handlesubmit}>Update</Button>{' '}

    </div>
    </div>
  )
}

export default Edit
