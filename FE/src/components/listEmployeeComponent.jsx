import React, {useEffect, useState } from 'react';
import employeeService from '../services/employeeService';
import { useHistory } from 'react-router-dom';
import SearchBar from './SearchBar';
import Alert from 'react-bootstrap/Alert';

const ListEmployeeComponent = () => {
    const history = useHistory();
    const [employees, setEmployee] = useState([]);
    //view employee
    const viewEmployee = (empId) => {
           history.push(`/view-employee/${empId}`);
    }
    //delete employee
    const deleteEmployee = (empId) => {
            employeeService.deleteEmployee(empId).then(res =>{
                setEmployee(employees.filter(employee => employee.empId !== empId));
            })
    }
    //call update employee page
    const editEmployee = (empId) => {
        history.push(`/update-employee/${empId}`);
    }

    //axios call
    useEffect(()=> {
        employeeService.getEmployees().then((res)=>{
            setEmployee(res.data.message)
        });
    }, [])
    //add EMployee method
    const addEmployee = () => {
        // provide history object through props
            history.push('/add-employee');
    }
        return (
            <div>
                <h2 className="text-center">Employee Management System</h2>
                <SearchBar employeeDetails = {employees} searchResult = {setEmployee}/>
                <div className="container">
                 <button className="btn btn-success" style={{marginLeft:'-30px'}} onClick={()=> addEmployee}>Add Employee</button>
                 </div>  <br/>
                 {!employees.length ? <Alert key="danger" variant="danger">No Data Found!</Alert> : 
                    <div className="row"> 
                        <table className="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Employee Id</th>
                                <th>Employee Name</th>
                                <th>Employee Salary</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees.map(employee=>(
                                    <tr key={employee.id}>
                                        <td>{employee.empId}</td>
                                        <td>{employee.empName}</td>
                                        <td>{employee.empSalary}</td>
                                        <td>
                                            <button onClick={()=> editEmployee(employee.empId)} className="btn btn-info">Update</button>
                                            <button onClick={()=> deleteEmployee(employee.empId)} className="btn btn-danger" style={{marginLeft:'20px'}}>Delete</button>
                                            <button onClick={()=> viewEmployee(employee.empId)} className="btn btn-primary" style={{marginLeft:'20px'}}>View</button>
                                        </td>
                                    </tr>
                                )
                                ) 
                            }
                        </tbody>
                        </table>
                    </div>
                 }
            </div>
        );
}
export default ListEmployeeComponent;