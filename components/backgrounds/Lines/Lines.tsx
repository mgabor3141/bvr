import { PropsWithChildren } from "react";
import styles from "./Lines.module.css";

export const Lines = ({ children }: PropsWithChildren<{}>) => (
  <div className={styles.linesOuter}>
    <div className="lines">{children}</div>
  </div>
);
