import Link from "next/link";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>BOTOCAR</h2>
          <p>Choose and Buy your car</p>
        </Link>
      </header>

      <div className={styles.container}>{children}</div>

      <footer className={styles.footer}>
        <a href="https://mfgh.vercel.app" target="_blank">
          Botostart
        </a>
        Next.js courses | BotoCar Project &copy;
      </footer>
    </>
  );
};

export default Layout;
