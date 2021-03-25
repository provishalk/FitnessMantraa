import React, { useState } from 'react'
import MyNavBar from './MyNavBar';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const UserRegistration = () => {
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
                        <h1>User Registration</h1>
                        <h2>Sign Up</h2>
                        <p>It's quick and easy.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-5 justify-content-center mx-auto">

                        <FormGroup row>
                            <Label for="name" sm={3}>FullName</Label>
                            <Col sm={9}>
                                <Input type="text" name="username" id="name" placeholder="Full Name" value={fullName} onChange={(event) => {
                                    setFullName(event.target.value);
                                }} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleEmail" sm={3}>Email</Label>
                            <Col sm={9}>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Email Address" value={userEmail} onChange={(event) => {
                                    setUserEmail(event.target.value);
                                }} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="mobileno" sm={3}>Mobile No</Label>
                            <Col sm={9}>
                                <Input type="text" name="mobileno" id="mobileno" placeholder="Mobile No" value={mobileNo} onChange={(event) => {
                                    setMobileNo(event.target.value);
                                }} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="username" sm={3}>Username</Label>
                            <Col sm={9}>
                                <Input type="text" name="username" id="username" placeholder="New User-ID" value={userName} onChange={(event) => {
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
                                <Button className="mt-3" onClick={
                                    () => {
                                        fetch('http://localhost:5050/userRegistration', {
                                            method: 'POST',
                                            body: JSON.stringify({
                                                FullName : fullName,
                                                UserEmail : userEmail,
                                                MobileNo : mobileNo,
                                                UserName :userName,
                                                UserPassword : userPassWord
                                            }),
                                            headers: {
                                                'Content-type': 'application/json; charset=UTF-8',
                                            },
                                        }).then((response) => response.json())
                                            .then(data => {

                                            });
                                    }
                                }>Sign Up</Button>
                            </Col>
                        </FormGroup>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default UserRegistration
