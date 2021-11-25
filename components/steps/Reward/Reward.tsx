// @ts-expect-error no types
import Fade from "react-reveal/Fade";
import styles from "./Reward.module.css";

export const Reward = () => {
  return (
    <>
      <h1 className="title">
        <Fade top delay={500} duration={1500}>
          🎉 Boldog születésnapot! 🎉
        </Fade>
      </h1>

      <Fade delay={1500} duration={2000}>
        <div className="textBox">
          <p>
            Mankind turned Earth into a dry wasteland and perished, but some
            species adapted and evolved.
          </p>
          <p>Sok szeretettel: Jani, Kristóf, Máté, Gábor</p>
        </div>
      </Fade>

      <Fade top delay={2000} duration={5000}>
        <div className={styles.reward}>TODO-E751H-F9MLF</div>
      </Fade>
    </>
  );
};
