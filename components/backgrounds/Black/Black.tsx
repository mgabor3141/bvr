import { PropsWithChildren } from "react";
import styles from "./Black.module.css";

export const Black = ({ children }: PropsWithChildren<{}>) => (
  <div className={styles.linesOuter}>
    <div className={styles.linesInner}>{children}</div>
  </div>
);
