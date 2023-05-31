import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { deleteuser } from './userReducer';



const Home = () => {
    const nav = useNavigate()
    const users = useSelector((state) => state.users)
    console.log(users);
    const dispatch = useDispatch()

    const deletee = (id) => {
      dispatch(deleteuser({id: id}))
    }
  return (
    <div>
      <h2>CRUD APP</h2><br /><br />

<div style={{paddingLeft:'5%'}}><Button variant="outline-success" onClick={() => nav('/create') }>Create New +</Button> <br /><br /></div>

      <Table  striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
             <tr key={index}>
             <td>{user.id}</td>
             <td>{user.name}</td>
             <td>{user.email}</td>
             <td>
             <Button variant="outline-warning" onClick={() => nav(`/edit/${user.id}`)}>Edit</Button>{' '}
             <Button variant="outline-danger" onClick={() =>  deletee(user.id)}>Delete</Button>{' '}

             </td>
           </tr>
        ))}
       
     
      </tbody>
    </Table>
    </div>
  )
}

export default Home
