import styles from "./Main.module.css";
import Banner from "./banner/Banner";
import BoostBanner from "./boostbanner/BoostBanner";
import ShortenForm from "./shortenForm/ShortenForm";
import { statistics } from "..//../utils/dataStatistics";
import Statistics from "./statistics/Statistics";

function Main() {
  return (
    <>
      <div className={styles.content}>
        <Banner />
        <ShortenForm />
        <div className={styles.advancedContent}>
          <div className={styles.infoStatistics}>
            <h1>Advanced Statistics</h1>
            <p>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
          <div className={styles.cards}>
            {statistics.map((statistics) => {
              const { id, icon, title, text } = statistics;
              return (
                <div key={id}>
                  <Statistics icon={icon} title={title} text={text} />
                </div>
              );
            })}
          </div>
        </div>

        <BoostBanner />
      </div>
    </>
  );
}

export default Main;
