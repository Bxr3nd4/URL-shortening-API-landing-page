import styles from "./ShortenForm.module.css"

function ShortenForm() {
  return (
    <>
      <div className={styles.inputContainer}>
        <input type="text" placeholder="Shorten a link here..."></input>
        <button> Shorten It!</button>
      </div>
    </>
  );
}

export default ShortenForm;
