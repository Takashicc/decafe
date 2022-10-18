import styles from "@/styles/components/organisms/loginHeader.module.scss";
import Link from "next/link";

const LoginHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.owner_wrapper}>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
};

export default LoginHeader;
