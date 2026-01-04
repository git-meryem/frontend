import React, { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom'
import {deleteEmployee, getEmployeeById, listEmployees} from '../Service/EmployeeService'

const ListEmployeeComponent = () => {

 const [employees, setEmployees] =useState([])

 const fetchEmployees = () =>{
    listEmployees().then((res)=>{setEmployees(res.data)})
    .catch(error=>{console.error(error)})

 }

  useEffect(() => {
    fetchEmployees()
  }, [])

  const navigate = useNavigate();

  function addNewEmployee() {
    navigate('/add-employee')
  }


  const removeEmployee = (id) => {
    deleteEmployee(id).then(() => {
      fetchEmployees(); // rafraîchir la liste
    });
  };

  const updateEmployee = (id) =>{
    getEmployeeById(id).then(navigate(`/edit-employee/${id}`))

  }

  
  
  return (
    <div className='container'>
      <h4 className='text-center mt-4'>List of Employees</h4>
      <h5 className='text-left mt-4'>Number of Employees : {employees.length}</h5>
      <div className="d-flex justify-content-end">
      <button type="button" class="btn btn-primary mb-3" onClick={addNewEmployee}>Add Employee</button>
      </div>
        <table className="table table-striped table-bordered">
        <thead>
            <tr className='text-center'>
                <th scope="col">id</th>
                <th scope="col">Firstname</th>
                <th scope="col">Lastname</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            {
                employees.map(employee=>
                     <tr key={employee.id}>
                         <td>{employee.id}</td>
                         <td>{employee.firstname}</td>
                         <td>{employee.lastname}</td>
                         <td>{employee.email}</td>
                         <td className='text-center'>
                            <button type="button" className="btn btn-danger m-3" onClick={()=>removeEmployee(employee.id)}><i className="bi- bi-trash"></i></button>
                            <button type="button" className="btn btn-success m-3"><i className='bi- bi-pen' onClick={()=>updateEmployee(employee.id)}></i></button>
                         </td>
                     </tr>
                )
            }
        </tbody>
        </table>
    </div>
  )
}
export default ListEmployeeComponent


