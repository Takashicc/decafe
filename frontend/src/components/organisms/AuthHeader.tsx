import styles from "@/styles/components/organisms/header.module.scss";
import Link from "next/link";

const AuthHeader = () => {
  return (
    <div className={styles.header}>
      <div>
        <Link href="/">
          <img
            className={styles.logoPic}
            width="50"
            src="https://i.im.ge/2022/08/03/FCRHSS.logo-cafe.jpg"
            alt="logo cafe"
          />
        </Link>
      </div>
      <div className={styles.welcomeMessageWrapper}>
        Welcome, Mr. Shop Owner!
      </div>
      <div className={styles.shopLinkWrapper}>
        <Link href="/owners/login">Logout</Link>
      </div>
    </div>
  );
};

export default AuthHeader;
