import { useEffect, useState } from "react";
import { jwtIsAuthenticated } from "../api";
import modelType from "../model.type";

const useAuth = () => {
  const [check, setCheck] = useState<modelType.AuthCheck>({
    checked: false,
    isAuthenticated: false,
  });

  useEffect(() => {
    (async () => {
      try {
        const isAuthenticated: boolean = await jwtIsAuthenticated();
        setCheck({ checked: true, isAuthenticated });
      } catch (error) {
        setCheck({ checked: true, isAuthenticated: false });
      }
    })();
  });

  return check;
};

export default useAuth;
