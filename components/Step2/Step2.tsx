import AuthCode from "react-auth-code-input";
// @ts-expect-error no types
import Fade from "react-reveal/Fade";
// @ts-expect-error no types
import HeadShake from "react-reveal/HeadShake";
import { useCode } from "../../hooks/useCode";
import styles from "./Step2.module.css";

const SOLUTION_LENGTH = 6;

export const Step2 = () => {
  const { shake, setCode } = useCode(SOLUTION_LENGTH);

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </Fade>

      <div className={styles.codeEntryContainer}>
        <Fade top delay={1000} duration={1500}>
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
