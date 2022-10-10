import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      Cookies.remove("access_token");
      navigate("/");
    })();
  }, [navigate]);

  return <></>;
};

export default Logout;
