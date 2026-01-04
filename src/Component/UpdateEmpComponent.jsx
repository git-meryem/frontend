import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getEmployeeById, updateEmployee } from '../Service/EmployeeService';

const UpdateEmpComponent = () => {

  const [firstname,setFirstname] = useState("");
  const [lastname,setLastname] = useState("");
  const [email,setEmail] = useState("");

    const navigate = useNavigate();

    const annuler = ()=> navigate(-1)

    const {id} = useParams()
    console.log(id); 

    useEffect(() => {
      getEmployeeById(id).then((res)=>{
      setFirstname(res.data.firstname);
      setLastname(res.data.lastname);
      setEmail(res.data.email);
    })
    
    }, [id])

    const saveUpdate = (e) => {
      e.preventDefault();
      const employee = {firstname,lastname,email};
      updateEmployee(id,employee).then(navigate('/employees'))
    }
    
  
  return (
    <div>
      <h4 className='text-center mt-4'>Edit Employee</h4>
    <div className='d-flex justify-content-center align-items-center'>
        <form className='col-6' >
            <div className="mb-3">
                <label for="exampleInputFirstname" className="form-label">Firstname</label>
                <input type="text"
                 className="form-control"
                  id="exampleInputFirstname"
                  value={firstname}
                  onChange={(e)=> setFirstname(e.target.value)}
                  />
                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
            </div>
            <div className="mb-3">
                <label for="exampleInputLastname" className="form-label">Lastname</label>
                <input type="text" 
                className="form-control"
                 id="exampleInputLastname"
                 value={lastname}
                 onChange={(e)=> setLastname(e.target.value)}
                 />
                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail" className="form-label">Email</label>
                <input type="text"
                 className="form-control"
                  id="exampleInputEmail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                 />
            </div>
            <button className="btn btn-success m-3" type="submit" onClick={saveUpdate}>Update</button>
            <button type="button" className="btn btn-danger" onClick={annuler}>Annuler</button>
        </form>
    </div>
    </div>
  )
}

export default UpdateEmpComponent
