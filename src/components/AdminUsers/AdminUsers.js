import React, { useState, useEffect } from "react";
import MyNavBar from "../MyNavBar";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/user/users")
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => console.log(error.response));
  }, []);
  return (
    <div>
      <MyNavBar />
      <div className="container">
        <div className="mt-3">
          <Link to="admin-feedback">Go to Feedbacks</Link>
        </div>

        <h3 className="mt-4">Users</h3>
        {users.map((user) => (
          <div class="card mt-3">
            <div class="card-body p-3">
              <h5 class="card-title">{user.fullName}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{user.email}</h6>
              {/* <p class="card-text">{feedback.message}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminUsers;
