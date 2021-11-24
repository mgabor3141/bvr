import Head from "next/head";
import { PropsWithChildren } from "react";
import styles from "../styles/Home.module.css";

console.log(
  `
 __| |_____________________________________________| |__
(__   _____________________________________________   __)
   | |                                             | |
   | |             ___ _             _             | |
   | |            / __| |_  ___  ___| |            | |
   | |            \\__ \\ ' \\/ _ \\/ _ \\_|            | |
   | |            |___/_||_\\___/\\___(_)            | |
   | |                                             | |
   | |      Bad beaver! No devtools for you!       | |
 __| |_____________________________________________| |__
(__   _____________________________________________   __)
   | |                                             | |`
);

const PageWrapper = ({ children }: PropsWithChildren<{}>) => (
  <div className={styles.container}>
    <Head>
      <title>Beavermageddon</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>{children}</main>
  </div>
);

export default PageWrapper;
