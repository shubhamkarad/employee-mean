import React from 'react';
import employeeService from '../services/employeeService';

// class createEmployeeComponent extends Component {
//     constructor(props)
//     {
//         super(props);
//         this.state={
//             empId:"",
//             empName:"",
//             empSalary:""
//         }
//         this.changeIdHandler = this.changeIdHandler.bind(this);
//         this.changeNameHandler = this.changeNameHandler.bind(this);
//         this.changeSalaryHandler = this.changeSalaryHandler.bind(this);
//         this.saveEmployee = this.saveEmployee.bind(this);
//     }
//     saveEmployee=(e)=>{
//         e.preventDefault();
//         let employee = {empId:this.state.empId, empName:this.state.empName, empSalary:this.state.empSalary}
//         console.log('employee =>' +JSON.stringify(employee));

//         employeeService.createEmployee(employee).then(res=>{
//             this.props.history.push("/employees");
//         })
//     }
//     cancel(){
//         this.props.history.push("/employees");
//     }
//     //Event Handling
//     changeIdHandler = (e) => {
//         this.setState({ empId: e.target.value});
//     }
//     changeNameHandler = (e) => {
//         this.setState({ empName: e.target.value});
//     }
//     changeSalaryHandler = (e) => {
//         this.setState({ empSalary: e.target.value});
//     }
//     render() {
//         return (
//             <div>
//                 <br></br>
//                 <div className="container">
//                    <div className="row">
//                         <div className="card col-md-6 offset-md-3 offset-md-3">
//                             <h3 className="text-center">Add Employee</h3>
//                             <div className="card-body">
//                                 <div className="form-group">
//                                 <label>Id : </label>
//                                 <input placeholder="your id" name="id" className="form-control"
//                                 value={this.state.empId} onChange={this.changeIdHandler}></input>
//                             </div>
//                                 <div className="form-group">
//                                 <label>Name : </label>
//                                 <input placeholder="your name" name="name" className="form-control"
//                                 value={this.state.empName} onChange={this.changeNameHandler}></input>
//                             </div>
//                                 <div className="form-group">
//                                 <label>Salary : </label>
//                                 <input placeholder="your Salary" name="salary" className="form-control"
//                                 value={this.state.empSalary} onChange={this.changeSalaryHandler}></input>
//                             </div>
//                             <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
//                             <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft : "10px"}}>Cancel</button>
//                         </div>
//                     </div> 
//                 </div>
//               </div>      
//            </div>
//         );
//     }
// }
// import React, { useState } from 'react';

// import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {useHistory} from "react-router-dom";

const initialValues = {
  empId: '',
  name: '',
  salary: '',
  departmentName: '',
  contactNumber: '',
  emailId: '',
  address: '',
  gender: '',
  dob: '',
  hobbies: ''
};



const CreateEmployeeComponent = () => {
const history = useHistory();
const onSubmit = (values) => {
    // Store the form data in some state or perform any other actions
    if (values.empId && values.name && values.salary) {

        console.log(values);
            console.log('employee =>' +JSON.stringify(values));
            employeeService.createEmployee(values).then(res=>{
                history.push("/")
            }).catch((err)=> {
                console.log(err);
            })
    }
    else {
        console.log("Something went wrong");
    }
  //   }
  };
  
      const cancel = () => {
          this.props.history.push("/employees");
      }
  const validate = (values) => {
    const errors = {};
  
    // Validation logic for each field
    if (!values.empId && !values.name && !values.salary) {
      errors.empId = 'Required';
      errors.name = 'Required';
      errors.salary = 'Required';
    }
    // Add more validation rules for other fields...
  
    return errors;
  };
  return (
    <div className="container">
    <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3 mt-4 py-3">
            <h3 className="text-center">Add Employee</h3>
            <div className="card-body">
                    <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validate={validate}
                    >
                    <Form>
                        <div className="d-flex flex-wrap justify-content-between">
                        <div className='form-group'>
                        <label htmlFor="empId">Employee ID</label>
                        <Field type="text" id="empId" name="empId" className="form-control" />
                        <ErrorMessage name="empId" component="div" className='danger'/>
                        </div>
                        <div>
                        <label htmlFor="name">Name</label>
                        <Field type="text" id="name" name="name" className="form-control"/>
                        <ErrorMessage name="name" component="div" />
                        </div>
                        <div>
                        <label htmlFor="name">Salary</label>
                        <Field type="text" id="Salary" name="salary" className="form-control"/>
                        <ErrorMessage name="salary" component="div" />
                        </div>
                        <div>
                        <label htmlFor="name">Departmen Name</label>
                        <Field type="text" id="departmentName" name="departmentName" className="form-control"/>
                        <ErrorMessage name="departmentName" component="div" />
                        </div>
                        <div>
                        <label htmlFor="name">Contact Number</label>
                        <Field type="text" id="contactNumber" name="contactNumber" className="form-control"/>
                        <ErrorMessage name="contactNumber" component="div" />
                        </div>
                        <div>
                        <label htmlFor="name">Hobbies</label>
                        <Field type="text" id="hobbies" name="hobbies" className="form-control"/>
                        <ErrorMessage name="hobbies" component="div" />
                        </div>
                        <div>
                        <label htmlFor="name">Gender</label>
                        <Field type="text" id="gender" name="gender" className="form-control"/>
                        <ErrorMessage name="gender" component="div" />
                        </div>
                        <div>
                        <label htmlFor="name">EmailId</label>
                        <Field type="text" id="emailId" name="emailId" className="form-control"/>
                        <ErrorMessage name="emailId" component="div" />
                        </div>
                        <div>
                        <label htmlFor="name">Address</label>
                        <Field type="text" id="address" name="address" className="form-control"/>
                        <ErrorMessage name="address" component="div" />
                        </div>
                        <div>
                        <label htmlFor="name">Dob</label>
                        <Field type="text" id="dob" name="dob" className="form-control"/>
                        <ErrorMessage name="Gender" component="div" />
                        </div>

                        {/* Add more fields with labels, input fields, and error messages... */}

                    </div>
                    <div className='py-3'>
                        <button type='submit' className="btn btn-success" >Save</button>
                        <button className="btn btn-danger" onClick={cancel} style={{marginLeft : "10px"}}>Cancel</button>
                    </div>
                    </Form>
                    </Formik>
            </div>
            </div>
        </div>
    </div>
  );
};

export default CreateEmployeeComponent;



// export default createEmployeeComponent;