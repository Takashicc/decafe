import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../styles/header.css";

const OwnerHeader = () => {
  return (
    <div className="header">
      <div className="ownerWrapper">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default OwnerHeader;
