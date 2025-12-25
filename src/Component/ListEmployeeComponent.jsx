import React from 'react'

const ListEmployeeComponent = () => {
    const maData = [
        {
            "id":1,
            "firstname":"meryem",
            "lastname":"essah",
            "email":"mariaessah8@gmail.com"
        },
         {
            "id":2,
            "firstname":"Ayoub",
            "lastname":"el halami",
            "email":"ayoub@gmail.com"
        },
         {
            "id":3,
            "firstname":"naima",
            "lastname":"benalila",
            "email":"naima@gmail.com"
        },
         {
            "id":4,
            "firstname":"mohammed",
            "lastname":"essah",
            "email":"mohamoha12@gmail.com"
        }
    ]
  return (
    <div className='container'>
      <h4 className='text-center'>List of Employees</h4>
        <table className="table  table-bordered">
        <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">Firstname</th>
                <th scope="col">Lastname</th>
                <th scope="col">Email</th>

            </tr>
        </thead>
        <tbody>
            {
                maData.map(employee=>
                     <tr key={employee.id}>
                         <td>{employee.id}</td>
                         <td>{employee.firstname}</td>
                         <td>{employee.lastname}</td>
                         <td>{employee.email}</td>
                     </tr>
                )
            }
        </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent

