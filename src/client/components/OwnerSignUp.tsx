import "../styles/OwnerSignUp.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import modelType from "../model.type";
import { useState } from "react";
import { ownersSignUp } from "../api";

const OwnerSignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<modelType.SignUpOwner>();

  const [message, setMessage] = useState<string>("");

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<modelType.SignUpOwner> = async (user) => {
    const errorInfo: modelType.ErrorInfo = await ownersSignUp(user);
    if (errorInfo.message) {
      setMessage(errorInfo.message);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="sign-up">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div> Sign up!</div>
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
          <input type="submit" id="submit-button" value="SignUp" />
        </div>
        <div>
          Do you already have an account? click{" "}
          <Link to="/owners/login">HERE</Link> to login!
        </div>
      </form>
    </div>
  );
};

export default OwnerSignUp;
