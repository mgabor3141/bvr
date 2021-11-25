import { PropsWithChildren } from "react";
import styles from "./PureBlack.module.css";

export const PureBlack = ({ children }: PropsWithChildren<{}>) => (
  <div className={styles.black}>{children}</div>
);
