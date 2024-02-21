import styles from "./Statistics.module.css";

interface Props {
  icon: string;
  title: string;
  text: string;
}

const Statistics = ({ icon, title, text }: Props) => {
  return (
    <div className={styles.cardsContent}>
      <div className={styles.card}>
        <img src={icon} />
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Statistics;
