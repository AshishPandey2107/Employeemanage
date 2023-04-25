import React, { useState } from "react";


const EmployeeForm = () => {

  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    const existingUsers = JSON.parse(localStorage.getItem("usersdata")) || [];
    const foundEmail = existingUsers.find((user) => user.email === email);
    const foundMobile = existingUsers.find((user) => user.mobile === mobile);

    // if (!foundEmail) {
    //   existingUsers.push({ name, dob, mobile, email });
    //   localStorage.setItem("usersdata", JSON.stringify(existingUsers));
    //   alert("user added to database");
    // }
    // else {
    //   alert("user already exist in the database");
    // }

    if (foundEmail) {
      alert("user already exist in the database");
      
    }
    else if (foundMobile) {
      alert("user already exist in the database");
    }
    else{
      existingUsers.push({ name, dob, mobile, email });
      localStorage.setItem("usersdata", JSON.stringify(existingUsers));
      alert("user added to database");
    }
  };


  return (
    <div className="container mt-5">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add Employee Details</h2>
        <form
        >
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group mt-3">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Enter your D.O.B"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          
          <div className="form-group mt-3">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          
          <div style={{textAlign:"center", alignItems:"center"}}>
          <button className="btn btn-primary btn-block mt-3" onClick={handleSubmit}>Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
