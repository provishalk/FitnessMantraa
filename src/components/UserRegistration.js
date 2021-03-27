import React, { useState } from "react";
import MyNavBar from "./MyNavBar";
import axios from "axios";
import alertify from "alertifyjs";

const UserRegistration = ({ history }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Validation States
  const [fullNameEmpty, setFullNameEmpty] = useState(false);
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [passwordEmpty, setPasswordEmpty] = useState(false);

  const register = () => {
    // Validation
    setFullNameEmpty(!fullName);
    setEmailEmpty(!email);
    setPasswordEmpty(!password);

    if (fullName && email && password) {
      axios
        .post("http://localhost:8080/api/user/register", {
          fullName,
          email,
          password,
        })
        .then((response) => {
          alertify.success(response.data.message);
          history.push("/login");
        })
        .catch((error) => alertify.warning(error.response.data.message));
    }
  };

  return (
    <div>
      <MyNavBar />
      <div className="container">
        <div className="row admin-login">
          <div className="col text-center">
            <h1>User Registration</h1>
            <p>It's quick and easy.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Full Name</label>
              <input
                className="form-control"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
              />
              {fullNameEmpty && (
                <span className="text-danger">Please enter full name</span>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />

              {emailEmpty && (
                <span className="text-danger">Please enter email</span>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              {passwordEmpty && (
                <span className="text-danger">Please enter password</span>
              )}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-dark px-5" onClick={register}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};
export default UserRegistration;
