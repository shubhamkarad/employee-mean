import React from 'react'

function SearchBar({employeeDetails, searchResult}) {
    const handleSubmit = (e) => e.preventDefault();
    
    const handleSearchOnChange = (e) => {
        if(e.target.value.length === 0) {
            console.log("yes");
            return searchResult(employeeDetails);
        }
        console.log(employeeDetails, "employee details");
        const resultArray = employeeDetails.filter(employee => employee.empName.includes(e.target.value));
        searchResult(resultArray);
    }
  return (
    <div className='search-section'>
        <form className='search' onSubmit={handleSubmit}>
            <input className='form-control' type='text' id='search' onChange={handleSearchOnChange} placeholder='search here'/>
            {/* <button className='search-button btn btn-info'>Search</button> */}
        </form>
    </div>
  )
}

export default SearchBar