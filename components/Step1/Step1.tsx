import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AuthCode from "react-auth-code-input";
// @ts-expect-error no types
import Fade from "react-reveal/Fade";
// @ts-expect-error no types
import HeadShake from "react-reveal/HeadShake";
import styles from "./Step1.module.css";

const SOLUTION_LENGTH = 6;

export const Step1 = () => {
  const [code, setCode] = useState("");
  const [shake, setShake] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (code.length != SOLUTION_LENGTH) return;

    (async () => {
      try {
        const { data: response } = await axios.get("/api/step1", {
          params: { code },
        });

        router.push(response.redirectTo);
      } catch (e) {
        const { response } = e as AxiosError;
        if (response?.status !== 418) throw e;

        setShake(false);
        setShake(true);
      }
    })();
  }, [code, router]);

  return (
    <>
      <h1 className={styles.title}>
        Welcome to
        <br />
        <Fade top delay={500} duration={1500}>
          Beavermageddon
        </Fade>
      </h1>

      <Fade delay={1500} duration={2000}>
        <div className={styles.textBox}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </Fade>

      <div className={styles.codeEntryContainer}>
        <Fade top delay={1000} duration={1500}>
          <HeadShake when={shake}>
            <AuthCode
              onChange={setCode}
              characters={SOLUTION_LENGTH}
              containerClassName={styles.container}
              inputClassName={styles.input}
            />
          </HeadShake>
        </Fade>
      </div>
    </>
  );
};
