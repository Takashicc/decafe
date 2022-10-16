// import "@/styles/header.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <div className="shopLinkWrapper">
        <Link href="/owners/login">Cafe Owners</Link>
      </div>
      <div className="shopLinkWrapper">
        {/* <Link href="/owners/logout">Cafe Owners Logout</Link> */}
        {/* TODO Add logout functionality */}
      </div>
      <div className="shopLinkWrapper">
        <Link href="/shops/new">Create shop</Link>
      </div>
    </div>
  );
};

export default Header;
