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
          <p style={{ marginTop: 0 }}>
            YES! You did it, the file is now unlocked! Oh man! These beavers are
            going crazy, they are just buzzing with activity! They seem to be
            progressing at a breakneck speed! Sadly, I can’t quite find anything
            in here that would help us get out, but maybe… If we stay here for a
            while… With a bit of guidance, I’m sure these beavers could achieve
            technological levels they never even dreamt of! That could be our
            way out, and either way, Dipper and Mabel seem to enjoy their
            company quite a lot.
          </p>
          <p>So what do you say, partner? Are you up for the challenge?</p>
          <p
            style={{ textAlign: "right", fontStyle: "italic", marginBottom: 0 }}
          >
            Sok szeretettel: Jani, Kristóf, Máté, Gábor
          </p>
        </div>
      </Fade>

      <Fade top delay={2000} duration={5000}>
        <div className={styles.reward}>CH3CK-UR-3M41L</div>
      </Fade>

      <Fade delay={5000} duration={2000}>
        <div className={styles.footer}>
          &copy; 2021-11-25 &mdash; A <i>THE BOIS ( ͡° ͜ʖ ͡°)</i> production
        </div>
      </Fade>
    </>
  );
};
