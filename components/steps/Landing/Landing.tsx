import Image from "next/image";
import Link from "next/link";
// @ts-expect-error no types
import Fade from "react-reveal/Fade";
import styles from "./Landing.module.css";

export const Landing = () => {
  return (
    <>
      <h1 className={styles.text}>
        <p>Just take it, and it&apos;s yours!</p>
      </h1>
      <p>But it&apos;s dangerous to go alone. Maybe seek out some friends?</p>

      <Fade>
        <Link href="/beavermageddon">
          <a className={styles.coinContainer}>
            <Image
              src="https://i0.wp.com/harry-wright.com/wp-content/uploads/2017/12/rotating-bitcoin_orig-1.gif"
              width="200"
              height="200"
              alt="Coin"
            />
          </a>
        </Link>
      </Fade>
    </>
  );
};
