import React, { useState } from 'react';
import MyNavBar from './MyNavBar';
import { Link } from 'react-router-dom';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const UserLogin = () => {
    const [fullName, setFullName] = useState("")
    const [userEmail, setUserEmail] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [userName, setUserName] = useState("")
    const [userPassWord, setUserPassWord] = useState("")
    return (
        <div>
            <MyNavBar />
            <div className="container ">
                <div className="row admin-login">
                    <div className="col text-center">
                        <h1>Login</h1>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-5 justify-content-center mx-auto">
                        <FormGroup row>
                            <Label for="username" sm={3}>Username</Label>
                            <Col sm={9}>
                                <Input type="text" name="username" id="username" placeholder="User-ID" value={userName} onChange={(event) => {
                                    setUserName(event.target.value)
                                }} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="examplePassword" sm={3}>Password</Label>
                            <Col sm={9}>
                                <Input type="password" name="password" id="examplePassword" placeholder="Password" value={userPassWord} onChange={(event) => {
                                    setUserPassWord(event.target.value);
                                }} />
                            </Col>
                        </FormGroup>
                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 2 }}>
                            <Link className="mx-3 mt-2 navbarlinks " to='/FitnessMantraa'>
                                <Button className="mt-3 ml-4 btn btn-success">Login</Button>
                            </Link>
                            </Col>
                        </FormGroup>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserLogin