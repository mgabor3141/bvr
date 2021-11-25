import AuthCode from "react-auth-code-input";
// @ts-expect-error no types
import Fade from "react-reveal/Fade";
// @ts-expect-error no types
import HeadShake from "react-reveal/HeadShake";
import { useCode } from "../../../hooks/useCode";
import styles from "./Step2.module.css";

const SOLUTION_LENGTH = 7;

export const Step2 = () => {
  const { shake, setCode } = useCode(SOLUTION_LENGTH, "step2");

  return (
    <>
      <h1 className="title">
        <Fade top delay={500} duration={1500}>
          Oh no!
        </Fade>
      </h1>

      <Fade delay={1500} duration={2000}>
        <div className="textBox" style={{ maxWidth: 700 }}>
          <p>Soos?! Anyone? Hello??</p>

          <p>
            Is there anyone out there? Heyooo? Anyway, if you’re reading this,
            could you pleaaaase consider helping us? We were just hanging
            around, and out of nowhere the portal started acting up, and then
            suddenly everything everything went REAAAAAALLY blocky… Like you
            can’t believe the cuboidness. Toootally blockular! And then the
            portal started sucking us in, and there were bright lights
            everywhere and whiissh whoosh, now we’re all just floating around in
            here and…
          </p>

          <p>- Mabel, give me that thing!</p>

          <p>
            - This is Stanford Filibrick Pines, Paranormal investigator and
            Interdimensional Outlaw. We are currently stuck in an
            interdimensional Para-Technological anomaly called “The Internet”.
            We’re anchored at sp**d***u***o*.
          </p>

          <p>
            - I’m los*** conn*cti*n to th*s terminal. I c*n see Stan’s Print*r
            nearby. Fin* us th*re
          </p>
        </div>
      </Fade>

      <div className={styles.codeEntryContainer}>
        <Fade top delay={3000} duration={3000}>
          <HeadShake when={shake}>
            <AuthCode
              onChange={setCode}
              characters={SOLUTION_LENGTH}
              containerClassName={styles.container}
              inputClassName={styles.input}
            />
          </HeadShake>
        </Fade>
      </div>
    </>
  );
};
