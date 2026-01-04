
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './Component/Header.jsx';
import ListEmployeeComponent from './Component/ListEmployeeComponent.jsx';
import Hello from './Component/Hello.jsx';
import EmployeeComponent from './Component/EmployeeComponent.jsx';
import UpdateEmpComponent from './Component/UpdateEmpComponent.jsx';

function App() {


  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/employees' element={<ListEmployeeComponent />} />
        <Route path='/hello' element={<Hello />} />
        <Route path='/add-employee' element={<EmployeeComponent/>}/>
        <Route path='/edit-employee/:id' element={<UpdateEmpComponent/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
