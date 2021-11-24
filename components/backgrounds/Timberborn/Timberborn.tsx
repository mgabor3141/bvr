import { PropsWithChildren } from "react";
import styles from "./Timberborn.module.css";

export const Timberborn = ({ children }: PropsWithChildren<{}>) => (
  <div className={styles.image}>
    <div className={styles.linesInner}>{children}</div>
  </div>
);
