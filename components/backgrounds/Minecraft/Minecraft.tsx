import { PropsWithChildren } from "react";
import styles from "./Minecraft.module.css";

export const Minecraft = ({ children }: PropsWithChildren<{}>) => (
  <div className={styles.outer}>
    <div className={styles.linesInner}>{children}</div>
  </div>
);
