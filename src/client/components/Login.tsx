import React, { useState } from "react";
import "../styles/Login.css";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
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

const Login: React.FC = () => {
  //seed data
  let database = [
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
  const [accCreate, setAccCreate] = useState<boolean>(false);

  //Update Input
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleClick = (): void => {
    setAccCreate(true);
  };

  //Handle Submit
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    // Check if username is correct
    const userData = database.find((user) => user.username === formValue.name);

    // Check if user pass is corect
    if (userData) {
      if (userData.password !== formValue.pass) {
        // Invalid password
        setErrorMessages({ name: "pass", message: "invalid pass" });
      } else {
        setLoginSuccess(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "name", message: "invalid username" });
    }
  };

  // Generate error message
  const renderErrorMessage = (name: string): JSX.Element | undefined => {
    if (name === errorMessages.name) {
      return <div className="error">{errorMessages.message}</div>;
    }
  };

  // Login form to update input
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div> LOG IN!</div>
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
          Don't have an account? click{" "}
          <Link to="/Createacc" onClick={handleClick}>
            HERE
          </Link>{" "}
          to create one!
        </div>
      </form>
    </div>
  );

  return (
    //Need router here to activate Link
    <Router>
      <div className="login">
        <div className="login-form">
          {accCreate ? <Createacc /> : null}
          {loginSuccess ? <Owner /> : null}
          {!accCreate && !loginSuccess ? renderForm : null}
        </div>
      </div>
    </Router>
  );
};

export default Login;
