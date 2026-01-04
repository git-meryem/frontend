import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createEmployee } from '../Service/EmployeeService';

const EmployeeComponent = () => {

    const navigate = useNavigate();

     function annulee() {
        navigate(-1)
    }

    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [email,setEmail] = useState("");

    const [errors,setErrors] = useState({});

   
    const saveEmployee = (e)=>{
        e.preventDefault();

        if (!validationChamp()) {
            return;
        }

        const employee = {firstname,lastname,email};
        console.log(employee);
        createEmployee(employee).then((res)=>{
            console.log(res.data);
            navigate('/employees');
        })
        
    }



   const validationChamp = () => {
  const errorsCopy = {};

  if (!firstname.trim()) {
    errorsCopy.firstname = "Firstname is required";
  }

  if (!lastname.trim()) {
    errorsCopy.lastname = "Lastname is required";
  }

  if (!email.trim()) {
    errorsCopy.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errorsCopy.email = "Email is not valid";
  }

  setErrors(errorsCopy);

  return Object.keys(errorsCopy).length === 0;
};


   

  return (
    <>
    <h4 className='text-center mt-4'>Add Employee</h4>

    <div className='d-flex justify-content-center align-items-center'>
        <form className='col-6' onSubmit={saveEmployee}>
            <div className="mb-3">
                <label for="exampleInputFirstname" className="form-label">Firstname</label>
                <input type="text"
                 className={`form-control ${errors.firstname ? "is-invalid" : ""}`} 
                  id="exampleInputFirstname"
                  name='firstname'
                  value={firstname}
                  onChange={(e)=>{setFirstname(e.target.value);
                        setErrors({ ...errors, firstname: "" });}}
                  />
                {errors.firstname && (<div className="invalid-feedback">{errors.firstname}</div>)}          
            </div>

            <div className="mb-3">
                <label for="exampleInputLastname" className="form-label">Lastname</label>
                <input type="text" 
                 className={`form-control ${errors.lastname ? "is-invalid" : ""}`} 
                 id="exampleInputLastname"
                 name='lastname'
                  value={lastname}
                  onChange={(e)=>{setLastname(e.target.value);
                        setErrors({ ...errors, lastname: "" });

                  }}/>
                {errors.lastname && (
                <div className="invalid-feedback">{errors.lastname}</div>
                )}            
                </div>
            <div className="mb-3">
                <label for="exampleInputEmail" className="form-label">Email</label>
                <input type="text"
                 className={`form-control ${errors.email ? "is-invalid" : ""}`} 
                  id="exampleInputEmail"
                  name='email'
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value);
                  setErrors({ ...errors, email: "" });}}/>
                {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
            </div>
            <button  className="btn btn-success m-3" type='submit'>Submit</button>
            <button type="button" className="btn btn-danger " onClick={annulee}>Annuler</button>
        </form>
    </div>
    </>
  )
}
export default EmployeeComponent
