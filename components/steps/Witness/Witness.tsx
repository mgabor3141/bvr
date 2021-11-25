import AuthCode from "react-auth-code-input";
// @ts-expect-error no types
import Fade from "react-reveal/Fade";
// @ts-expect-error no types
import HeadShake from "react-reveal/HeadShake";
import { useCode } from "../../../hooks/useCode";
import styles from "./Witness.module.css";

const SOLUTION_LENGTH = 6;

export const Witness = () => {
  const { shake, setCode } = useCode(SOLUTION_LENGTH, "witness");

  return (
    <>
      <h1 className="title">
        <Fade top delay={500} duration={1500}>
          Bear Witness
        </Fade>
      </h1>

      <Fade delay={1500} duration={2000}>
        <div className="textBox">
          TODO Witness text TEMPORARY Solution 123456
        </div>
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
