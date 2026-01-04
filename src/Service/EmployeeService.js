import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8085/api/employees';


//GET LIST EMPLOYEE "GET"
export const listEmployees = () => axios.get(REST_API_BASE_URL);

//CREATE EMPLOYEE
export const createEmployee = (employee)=> axios.post(REST_API_BASE_URL,employee);

//DELETE EMPLOYEE
export const deleteEmployee = (id) => axios.delete(`${REST_API_BASE_URL}/${id}`);

//GET EMPLOYEE BY ID 
export const getEmployeeById = (id) => axios.get(`${REST_API_BASE_URL}/${id}`);

//UPDATE EMPLOYEE
export const updateEmployee = (id,employee) => axios.put(`${REST_API_BASE_URL}/${id}`,employee); 