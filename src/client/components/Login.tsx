import React, { useState } from "react";
import "../styles/Login.css";
import { useForm } from "react-hook-form";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

interface FormValue {
  username: string;
  password: string;
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
  const [accCreate, setAccCreate] = useState<boolean>(false);

  //useForm setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  //sets current state to submitted username/pass
  const onSubmit = (data: any) => {
    console.log("data received");
  };

  //Goes to account creation page
  const accountCreate = (): void => {
    setAccCreate(true);
  };

  // sets userData received from form
  let userData: FormValue | undefined;

  return (
    <Router>
      <div className="login">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div> LOG IN!</div>
          <div className="input-container">
            <label>Username </label>
            <input
              placeholder="User Name"
              type="text"
              className="input"
              {...register("username", {
                validate: {
                  exists: (username) => {
                    userData = database.find(
                      (user) => user.username === username
                    );
                    if (!userData) return "wrong username, bro";
                  },
                  // message: "Your account does not",
                },
                required: "This is required",
                minLength: {
                  value: 4,
                  message: "Min length is 4",
                },
              })}
            />
            <div>{errors.username?.message}</div>
          </div>
          <div className="input-container">
            <label>Password </label>
            <input
              type={"password"}
              placeholder="Password"
              {...register("password", {
                required: "This is required",
                validate: {
                  goodPass: (password) => {
                    console.log(userData);
                    if (userData) {
                      if (userData.password !== password) {
                        return "wrong password, fool!";
                      }
                    }
                  },
                },
                minLength: {
                  value: 4,
                  message: "Min length is 4",
                },
              })}
            />
            <div>{errors.password?.message}</div>
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
          <div>
            Don't have an account? click{" "}
            <Link to="/Createacc" onClick={accountCreate}>
              HERE
            </Link>{" "}
            to create one!
          </div>
        </form>
      </div>
    </Router>
  );
};

export default Login;
