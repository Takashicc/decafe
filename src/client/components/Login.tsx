import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "../styles/Login.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Owner from "./Owner";
import Createacc from "./Createacc";

interface ErrorMessage {
  name: string;
  message: string;
}

interface FormValue {
  name: string;
  pass: string;
}

function Login() {
  //seed data
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  // React States
  const [errorMessages, setErrorMessages] = useState<ErrorMessage>({
    name: "",
    message: "",
  });
  const [loginSuccess, setLoginSuccess] = useState<boolean>(false);
  const [formValue, setFormValue] = useState<FormValue>({
    name: "",
    pass: "",
  });

  // User Login info
  const loginErrors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  //Update Input
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  //Handle Submit
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Check if username is correct
    const userData = database.find((user) => user.username === formValue.name);

    // Check if user pass is corect
    if (userData) {
      if (userData.password !== formValue.pass) {
        // Invalid password
        setErrorMessages({ name: "pass", message: loginErrors.pass });
      } else {
        setLoginSuccess(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "name", message: loginErrors.uname });
    }
  };

  // Generate error message
  const renderErrorMessage = (name: string) => {
    if (name === errorMessages.name) {
      return <div className="error">{errorMessages.message}</div>;
    } else {
      return undefined;
    }
  };

  // Login form to update input
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formValue.name}
            required
          />
          {renderErrorMessage("name")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="pass"
            onChange={handleChange}
            value={formValue.pass}
            required
          />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <div>
          Don't have an account? click <a href="/Createacc">HERE</a> to create
          one!
        </div>
      </form>
    </div>
  );

  return (
    <Router>
      <div className="login">
        <div className="login-form">
          <div className="title">Sign In</div>
          {isSubmitted ? <Owner /> : renderForm}
        </div>
      </div>
      <Route path="/Createacc" component={Createacc} />
    </Router>
  );
}

export default Login;
