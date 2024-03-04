import styles from "./ShortenForm.module.css";

function ShortenForm() {
  return (
    <>
      <div className={styles.inputContainer}>
        <div className={styles.input}>
          <input type="text" placeholder="Shorten a link here..."></input>
          <button> Shorten It!</button>
        </div>
      </div>
    </>
  );
}

export default ShortenForm;
