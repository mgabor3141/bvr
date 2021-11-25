import AuthCode from "react-auth-code-input";
// @ts-expect-error no types
import Fade from "react-reveal/Fade";
// @ts-expect-error no types
import HeadShake from "react-reveal/HeadShake";
import { useCode } from "../../../hooks/useCode";
import styles from "./Step1.module.css";

const SOLUTION_LENGTH = 3;

export const Step1 = () => {
  const { shake, setCode } = useCode(SOLUTION_LENGTH, "step1");

  return (
    <>
      <h1 className={styles.title}>
        Welcome to
        <br />
        <Fade top delay={500} duration={1500}>
          Beavermageddon
        </Fade>
      </h1>

      <Fade delay={1500} duration={2000}>
        <div className={styles.textBox}>
          Remember! Reality is an illusion, the universe is a hologram, buy
          gold, bye!
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
