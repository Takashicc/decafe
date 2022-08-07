import "../styles/OwnerLogin.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ownerLogin } from "../api";
import modelType from "../model.type";
import { useState } from "react";
import OwnerHeader from "./OwnerHeader";

const OwnerLogin: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<modelType.LoginOwner>();

  const [message, setMessage] = useState<string>("");

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<modelType.LoginOwner> = async (user) => {
    const errorInfo: modelType.ErrorInfo = await ownerLogin(user);
    if (errorInfo.message) {
      setMessage(errorInfo.message);
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <OwnerHeader />

      <div className="login">
        <div className="logocenter">
          <Link to="/" reloadDocument>
            <img src="/images/decafeowner.png" className="ownerlogo"></img>
          </Link>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="logintitle"> Login </div>
          <div className="error-message">{message}</div>
          <div>
            <label>Username </label>
            <input
              type="text"
              id="name"
              placeholder="User Name"
              {...register("name", {
                required: "Name is required",
              })}
            />
            <div className="error-message">{errors.name?.message}</div>
          </div>
          <div>
            <label>Password </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
            />
            <div className="error-message">{errors.password?.message}</div>
          </div>
          <div>
            <input type="submit" id="submit-button" value="Login" />
          </div>
          <div>
            Don't have an account? click <Link to="/owners/new">HERE</Link> to
            create one!
          </div>
        </form>
      </div>
    </>
  );
};

export default OwnerLogin;
