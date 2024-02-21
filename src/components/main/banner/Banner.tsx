import styles from "./Banner.module.css";
import mainImg from "../../../assets/illustration-working.svg";

function Banner() {
  return (
    <>
      <div className={styles.Banner}>
        <div className={styles.imgWorking}>
          <img src={mainImg} />
        </div>
        <div className={styles.info}>
          <h2>More than just shorter links</h2>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button>Get Started</button>
        </div>
      </div>
    </>
  );
}
export default Banner;
