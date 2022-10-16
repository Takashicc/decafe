// import "../styles/OwnerLogin.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { ownerLogin } from "@/api";
import * as schema from "@/api/schema";
import * as modelType from "@/model_type";
import OwnerHeader from "@/components/OwnerHeader";

const Login: React.FC = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<modelType.LoginOwner>();

  const [message, setMessage] = useState<string>("");

  const onSubmit: SubmitHandler<modelType.LoginOwner> = async (user) => {
    const auth: schema.Auth = await ownerLogin(user);

    if (auth.message) {
      setMessage(auth.message);
      return;
    }

    if (auth.access_token) {
      Cookies.set("access_token", auth.access_token);
      router.push("/");
    }
  };

  return (
    <>
      <OwnerHeader />

      <div className="login">
        <div className="logocenter">
          <Link href="/">
            <img
              src="/images/decafeowner.png"
              className="ownerlogo"
              alt="decafe owner logo"
            ></img>
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
            Don't have an account? click <Link href="/owners/signup">HERE</Link>{" "}
            to create one!
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
