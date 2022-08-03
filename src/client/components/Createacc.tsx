import React, { Fragment, useState, useRef } from "react";
import ReactDOM from "react-dom/client";
import Owner from "./Owner";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

interface FormValue {
  name: string;
  pass: string;
}
//states
const Createacc: React.FC = () => {
  const [formValue, setFormValue] = useState<FormValue>({
    name: "",
    pass: "",
  });

  const [accCreateSuccess, setAccCreateSuccess] = useState<boolean>(false);

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

  //Handle Submit
  const handleCreation = (event: React.FormEvent<HTMLFormElement>): void => {
    //send New Account data to database
    event.preventDefault();

    const newUserName = formValue.name;
    const newUserPass = formValue.pass;

    if (newUserName && newUserPass) {
      setAccCreateSuccess(true);
    }
  };

  // Login form to update input
  const renderForm = (
    <div className="form">
      <form onSubmit={handleCreation}>
        <div> Type in a desired Username and Password!</div>
        <div className="input-container">
          <label>Username </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formValue.name}
            required
          />
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
        </div>
        <div className="button-container">
          <input type="Submit" value="Create Account" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="login">
      <div className="login-form">
        {accCreateSuccess ? <Owner /> : renderForm}
      </div>
    </div>
  );
};

export default Createacc;
