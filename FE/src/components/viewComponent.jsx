import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/employeeService';

const ViewComponent = (props) => {
    // constructor(props){
    //     super(props)
    //     this.state={
    //         empId : this.props.match.params.id,
    //         employee:{}
    //     }
    // }
    const empId = props.match.params.id;
    const [employee, setEmployee] = useState('');
    useEffect(()=>{
        EmployeeService.getEmployeeById(empId).then(res=>{
            // this.setState({employee : res.data.message});
             let employeeData = res.data.message[0];
            setEmployee(employeeData)
            console.log("Employee =>" +JSON.stringify(employeeData));
        })
    }, []);

        return (
            <div><br></br>
                <div className="card col-md-6 offset-md-3"><br></br>
                <h3 className="text-center">View employee Details</h3>
                <div className="card-body d-flex flex-wrap justify-content-between p-4">
                    <div className="row p-2 w-50">
                        <label>Employee Id : </label>
                        <div className="form-control">{employee.empId}</div>
                    </div>
                    <div className="row p-2 w-50">
                        <label>Employee name : </label>
                        <div className="form-control">{employee.name}</div>
                    </div>
                    <div className="row p-2 w-50">
                        <label >Employee Salary : </label>
                        <div className="form-control">{employee.salary}</div>
                    </div>
                    <div className="row p-2 w-50">
                        <label >Department Name : </label>
                        <div className="form-control">{employee.departmentName}</div>
                    </div>
                    <div className="row p-2 w-50">
                        <label >Contact Number : </label>
                        <div className="form-control">{employee.contactNumber}</div>
                    </div>
                    <div className="row p-2 w-50">
                        <label >Email Id: </label>
                        <div className="form-control">{employee.emailId}</div>
                    </div>
                    <div className="row p-2 w-50">
                        <label >Hobbies: </label>
                        <div className="form-control">{employee.hobbies}</div>
                    </div>
                    <div className="row p-2 w-50">
                        <label>Gender: </label>
                        <div className="form-control">{employee.gender}</div>
                    </div>
                    <div className="row p-2 w-50">
                        <label>Date Of Birth: </label>
                        <div className="form-control">{employee.dob}</div>
                    </div>
                </div>
            </div>
        </div>
        );
    }

export default ViewComponent;