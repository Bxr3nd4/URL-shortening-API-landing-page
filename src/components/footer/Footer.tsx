import styles from "./Footer.module.css";
// import logo from "../../assets/logo.svg";
import facebook from "../../assets/icon-facebook.svg"
import twitter from "../../assets/icon-twitter.svg"
import pinterest from "../../assets/icon-pinterest.svg"
import instagram from "../../assets/icon-instagram.svg"

function Footer() {
  return (
    <>
      <div className={styles.footerContent}>
        <div className={styles.logo}>
          {/* <img src={logo} /> */}
          <h1>Shortly</h1>
        </div>

        <div className={styles.bottom}>
          <ul>
            <li>Features</li>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
          <br />
          <ul>
            <li>Resources</li>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
          <br />
          <ul>
            <li>Company</li>
            <li>About</li>
            <li> Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={styles.social}>
          <img src={facebook} />
          <img src={twitter} />
          <img src={pinterest} />
          <img src={instagram} />
        </div>
      </div>
    </>
  );
}

export default Footer;
