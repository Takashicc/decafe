import styles from "@/styles/OwnerSignUp.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ownersSignUp } from "@/api";
import * as modelType from "@/model_type";
import * as schema from "@/api/schema";
import Cookies from "js-cookie";

const SignUp = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<modelType.SignUpOwner>();

  const [message, setMessage] = useState<string>("");

  const onSubmit: SubmitHandler<modelType.SignUpOwner> = async (user) => {
    const auth: schema.Auth = await ownersSignUp(user);

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
    <div className={styles.sign_up}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div> Sign up!</div>
        <div className={styles.error_message}>{message}</div>
        <div>
          <label>Username </label>
          <input
            type="text"
            className={styles.name}
            placeholder="User Name"
            {...register("name", {
              required: "Name is required",
            })}
          />
          <div className={styles.error_message}>{errors.name?.message}</div>
        </div>
        <div>
          <label>Password </label>
          <input
            type="password"
            className={styles.password}
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
          />
          <div className={styles.error_message}>{errors.password?.message}</div>
        </div>
        <div>
          <input
            type="submit"
            className={styles.submit_button}
            value="SignUp"
          />
        </div>
        <div>
          Do you already have an account? click{" "}
          <Link href="/owners/login">HERE</Link> to login!
        </div>
      </form>
    </div>
  );
};

export default SignUp;
