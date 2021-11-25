import AuthCode from "react-auth-code-input";
// @ts-expect-error no types
import Fade from "react-reveal/Fade";
// @ts-expect-error no types
import HeadShake from "react-reveal/HeadShake";
import { useCode } from "../../../hooks/useCode";
import styles from "./Step2.module.css";

const SOLUTION_LENGTH = 6;

export const Step2 = () => {
  const { shake, setCode } = useCode(SOLUTION_LENGTH, "step2");

  return (
    <>
      <h1 className={styles.title}>
        <Fade top delay={500} duration={1500}>
          Oh no!
        </Fade>
      </h1>

      <Fade delay={1500} duration={2000}>
        <div className={styles.textBox}>
          TODO Dipper and Maple are trapped etc etc you need to go to block
          TEMPORARY Solution 123456 world etc etc
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
