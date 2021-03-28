import React, { useState } from "react";
import MyNavBar from "./MyNavBar";
import "./AdminLogin.css";
import axios from "axios";
import alertify from "alertifyjs";

const AdminLogin = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Validation States
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [passwordEmpty, setPasswordEmpty] = useState(false);

  const login = () => {
    // Validation
    setEmailEmpty(!email);
    setPasswordEmpty(!password);

    if (email && password) {
      axios
        .post("http://localhost:8080/api/admin/login", {
          email,
          password,
        })
        .then((response) => {
          //   console.log("res", response.data);
          localStorage.setItem("admin", JSON.stringify(response.data));
          history.push("/admin-feedback");
        })
        .catch((error) => alertify.warning(error.response.data.message));
    }
  };

  return (
    <div>
      <MyNavBar />
      <div className="container mt-4">
        <div className="row admin-login">
          <div className="col text-center">
            <h1>ADMIN LOGIN</h1>
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
          <button className="btn btn-dark px-5" onClick={login}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
