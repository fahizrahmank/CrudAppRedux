import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useRef } from 'react';
import { addUser } from './userReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



function Create() {
   const reff = useRef(null)
   const nav = useNavigate()

  //  const users = useSelector((state) => state.users)
   const dispatch = useDispatch()
   const submitHandle = () => { 
    const userName = reff.current.username.value;
    const userEmail = reff.current.useremail.value;
    dispatch(addUser({name:userName, email:userEmail, id: parseInt(Math.random() * 9999)}))
    nav('/')

  }
   

  return (
    <div style={{backgroundColor:'grey',height:'300px',width:'60%',marginLeft:'12%'}}>
    <div style={{width:'70%',marginLeft:'10%',marginTop:'5%'}}>
        <br /><br /><br />
        <form onSubmit={(e)=>{e.preventDefault()}} ref={reff}>
            <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg" >Name</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          name='username'
        />
      </InputGroup><br /><br />
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg" >Email</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          name='useremail'
        />
      </InputGroup><br />
      </form>
      <Button variant="primary" onClick={submitHandle}>Submit</Button>{' '}

    </div>
    </div>
  )
}

export default Create
