import { PropsWithChildren } from "react";
import styles from "./Black.module.css";

export const Black = ({ children }: PropsWithChildren<{}>) => (
  <div className={styles.linesOuter}>
    <div className="lines">{children}</div>
  </div>
);
