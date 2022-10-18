import styles from "@/styles/components/organisms/header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.shop_link_wrapper}>
        <Link href="/owners/login">Cafe Owners</Link>
      </div>
      <div className={styles.shop_link_wrapper}>
        {/* <Link href="/owners/logout">Cafe Owners Logout</Link> */}
        {/* TODO Add logout functionality */}
      </div>
      <div className={styles.shop_link_wrapper}>
        <Link href="/shops/new">Create shop</Link>
      </div>
    </div>
  );
};

export default Header;
