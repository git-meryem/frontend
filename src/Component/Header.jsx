import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Employees Management</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                        <Link class="nav-link active" to={'/hello'}>Home</Link>
                        </li>
                        <li class="nav-item">
                        {/* <a class="nav-link" href="#">List</a> */}
                        <Link class="nav-link active" to={'/employees'}>List</Link>

                        </li>
                    </ul>
                </div>
            </div> 
       </nav>
    </>
  )
}
export default Header


