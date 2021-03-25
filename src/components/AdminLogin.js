import React, { useState } from 'react'
import MyNavBar from './MyNavBar';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./AdminLogin.css"


const AdminLogin = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div>
            <MyNavBar />
            <div className="container mt-4">
                <div className="row admin-login">
                    <div className="col text-center">
                        <h1>ADMIN LOGIN</h1>
                    </div>
                </div>
                <div className="row fill-content">
                    <div className="col-5 justify-content-center mx-auto">

                        <FormGroup row>
                            <Label for="username" sm={3}>Username</Label>
                            <Col sm={9}>
                                <Input type="text" name="username" id="username" placeholder="Username" value={userName} onChange={(event => {
                                    setUserName(event.target.value);
                                })} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="examplePassword" sm={3}>Password</Label>
                            <Col sm={9}>
                                <Input type="password" name="password" id="examplePassword" placeholder="Password" value={password} onChange={(event) => {
                                    setPassword(event.target.value);
                                }} />
                            </Col>
                        </FormGroup>
                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 2 }}>
                                <Button className="mt-3" onClick={() => {
                                    fetch('http://localhost:5050/adminLogin', {
                                        method: 'POST',
                                        body: JSON.stringify({
                                            uName: userName,
                                            upassword: password
                                        }),
                                        headers: {
                                            'Content-type': 'application/json; charset=UTF-8',
                                        },
                                    }).then((response) => response.json())
                                        .then(data => {

                                        });
                                }
                                }>Login</Button>
                            </Col>
                        </FormGroup>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AdminLogin
