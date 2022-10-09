import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ownerLogout } from "../api";

const Logout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      await ownerLogout();
      navigate("/");
    })();
  }, [navigate]);

  return <></>;
};

export default Logout;
