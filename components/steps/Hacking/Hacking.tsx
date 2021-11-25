import AuthCode from "react-auth-code-input";
// @ts-expect-error no types
import Fade from "react-reveal/Fade";
// @ts-expect-error no types
import HeadShake from "react-reveal/HeadShake";
import { useCode } from "../../../hooks/useCode";
import styles from "./Hacking.module.css";

const SOLUTION_LENGTH = 10;

export const Hacking = () => {
  const { shake, setCode } = useCode(SOLUTION_LENGTH, "hacking");

  return (
    <>
      <h1 className="title">
        <Fade top delay={500} duration={1500}>
          Hacking
        </Fade>
      </h1>

      <Fade delay={1500} duration={2000}>
        <div className="textBox">TODO Hacking text Solution iameternal</div>
      </Fade>

      <div className={styles.codeEntryContainer}>
        <Fade top delay={3500} duration={1500}>
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
