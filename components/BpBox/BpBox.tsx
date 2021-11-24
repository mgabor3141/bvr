import Image from "next/Image";
import { useEffect, useState } from "react";
import styles from "./BpBox.module.css";

export const BpBox = ({ bp }: { bp: string }) => {
  const [tick, setTick] = useState(false);

  useEffect(() => {
    setTimeout(() => setTick(false), 1000);
  }, [tick]);

  return (
    <>
      <Image src="/clippy.svg" width="16" height="18" alt="Copy to clipboard" />
      <div className={styles.bpbox}>
        <input className={styles.bpoutput} value={bp} readOnly />

        <button
          className={styles.button}
          onClick={() => {
            setTick(true);
            navigator.clipboard.writeText(bp);
          }}
        >
          {tick ? (
            <Image src="/tick.svg" width="16" height="18" alt="Done" />
          ) : (
            <Image
              src="/clippy.svg"
              width="16"
              height="18"
              alt="Copy to clipboard"
            />
          )}
        </button>
      </div>
    </>
  );
};
