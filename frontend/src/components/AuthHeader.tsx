// import "../styles/header.css";
import Link from "next/link";

const AuthHeader = () => {
  return (
    <div className="header">
      <div className="picWrapper">
        <Link href="/">
          <img
            className="logoPic"
            width="50"
            src="https://i.im.ge/2022/08/03/FCRHSS.logo-cafe.jpg"
            alt="logo cafe"
          />
        </Link>
      </div>
      <div className="welcomeMessageWrapper">Welcome, Mr. Shop Owner!</div>
      <div className="shopLinkWrapper">
        <Link href="/owners/login">Logout</Link>
      </div>
    </div>
  );
};

export default AuthHeader;
