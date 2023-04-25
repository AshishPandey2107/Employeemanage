import logo from './logo.svg';
import './App.css';
// import {Navbar} from "./component";
import {Navbar} from './component/Navbar';
import {BrowserRouter, Route, Routes,Switch } from "react-router-dom";
import EmployeeForm from './component/EmployeeForm';
import Home from './component/Home';
export const App = () => {
  return (
    <BrowserRouter>

    <div>
      <Navbar /> 
      <div>
        <Routes>
          <Route path="/create-employee" element={<EmployeeForm />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>

  );
};
