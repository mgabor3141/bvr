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
          A Curious Wanderer
        </Fade>
      </h1>

      <Fade delay={1500} duration={2000}>
        <div className="textBox">
          <p>
            DANG IT! So close, yet so far away. We honed in on the signal I
            picked up, but it seems we only ended up at a false signal repeat...
          </p>
          <p>
            However, we did come across a (Mabel compels me to add, an
            incredibly cute) wanderer, who told stories of his home. A giant
            structure, handmade from timber, a marvelous feat of enginnering,
            and at it’s core, a file, just like the one we need!
          </p>
          <p>
            However, he’s been travelling for months now, and his homeland is
            unimaginably far… We don’t have months to spend on travelling… He
            did give us the adress though, maybe you can find a quicker way
            there?
          </p>
          <p>
            <code>beaver@46.101.226.232</code>
          </p>
          <p>TODO Solution iameternal</p>
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
