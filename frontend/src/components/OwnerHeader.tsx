// import "../styles/header.css";
import Link from "next/link";

const OwnerHeader = () => {
  return (
    <div className="header">
      <div className="ownerWrapper">
        <Link href="/">Home</Link>
      </div>
    </div>
  );
};

export default OwnerHeader;
