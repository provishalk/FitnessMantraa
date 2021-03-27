import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    return (
        <div>
            <FormGroup>
                <Label for="name">Name:</Label>
                <Input type="text" name="name" value={name} id="text" placeholder="Full Name" onChange={(event)=>{
                    setName(event.target.value);
                }
                }/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" value={email} id="exampleEmail" placeholder="Mail ID" onChange={(event)=>{
                    setEmail(event.target.value);
                }
                }/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleText">Message</Label>
                <Input type="textarea" name="text" value={message} id="exampleText" onChange={(event)=>{
                    setMessage(event.target.value);
                }
                }/>
            </FormGroup>
            
            <Button onClick={()=>{
                fetch('http://localhost:5050/formpost', {
                    method: 'POST',
                    body: JSON.stringify({
                        userName: name,
                        UserMail: email,
                        UserMessage : message
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                }).then((response) => response.json())
                    .then(data => {
                        
                    });
                    setMessage("");
                    setName("");
                    setEmail("");
            }
            }>Send</Button>
        </div> 
    )
}

export default ContactForm
