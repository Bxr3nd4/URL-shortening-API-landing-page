import "./Header.module.css";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.headerList}>
          <nav>
            <ul className={styles.list}>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">Resources</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.buttons}>
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>
    </>
  );
}

export default Header;
