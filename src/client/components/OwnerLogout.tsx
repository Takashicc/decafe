import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ownerLogout } from "../api";

const Logout: React.FC = () => {
  const navigate = useNavigate();
  //   const navigateRef = useRef(navigate);

  useEffect(() => {
    (async () => {
      await ownerLogout();
      navigate("/");
    })();
  }, [navigate]);

  return <></>;
};

export default Logout;
