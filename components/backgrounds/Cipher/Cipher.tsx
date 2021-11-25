import { PropsWithChildren } from "react";
// @ts-expect-error no types
import Fade from "react-reveal/Fade";
import styles from "./Cipher.module.css";

export const Cipher = ({ children }: PropsWithChildren<{}>) => (
  <>
    <div className={styles.outer}>
      <div className="lines">
        <Fade delay={500} duration={1500}>
          <img className={styles.image} src="/bill-cipher.png" alt="Bill" />
        </Fade>
        {children}
      </div>
    </div>
  </>
);
