import React, { useState, useEffect } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
    const existingUsers = JSON.parse(localStorage.getItem("usersdata"))
    console.log(existingUsers,"existingUsersexistingUsers")
//   const [users, setUser] = useState([]);

//   useEffect(() => {
//     loadUsers();
//   }, []);

//   const loadUsers = async () => {
//     const result = await axios.get("http://localhost:3003/users");
//     setUser(result.data.reverse());
//   };

  const deleteUser = (existingUsers, index) => {
    existingUsers.delete(existingUsers.index);
    // loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Employees Details</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">DOB</th>
              <th scope="col">Mobile</th>
              <th scope="col">Email</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {existingUsers.map((existingUsers, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{existingUsers.name}</td>
                <td>{existingUsers.dob}</td>
                <td>{existingUsers.mobile}</td>
                <td>{existingUsers.email}</td>
                {/* <td>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    // to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger ms-3"
                    onClick={() => deleteUser(existingUsers)}
                  >
                    Delete
                  </Link>
                </td> */}
              </tr>
             ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;