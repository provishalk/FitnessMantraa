import React, { useState } from "react";
import axios from "axios";
import alertify from "alertifyjs";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Validation State
  const [nameEmpty, setNameEmpty] = useState(false);
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [messageEmpty, setMessageEmpty] = useState(false);

  const sendMessage = () => {
    setNameEmpty(!name);
    setEmailEmpty(!email);
    setMessageEmpty(!message);

    if (name && email && message) {
      axios
        .post("http://localhost:8080/api/feedback/addFeedback", {
          name,
          email,
          message,
        })
        .then((response) => {
          alertify.success(response.data.message);
          setName("");
          setEmail("");
          setMessage("");
        })
        .catch((error) => console.log(error.response));
    }
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          {nameEmpty && <span className="text-danger">Plese enter name</span>}
        </div>
      </div>
      <div className="col-md-12">
        <div className="form-group">
          <label>Email</label>
          <input
            className="form-control"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          {emailEmpty && <span className="text-danger">Plese enter email</span>}
        </div>
      </div>
      <div className="col-md-12">
        <div className="form-group">
          <label>Message</label>
          <input
            className="form-control"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          />
          {messageEmpty && (
            <span className="text-danger">Plese enter message</span>
          )}
        </div>
      </div>
      <div className="col-md-12">
        <button className="btn btn-dark" onClick={sendMessage}>
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
