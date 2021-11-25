import {createDecipheriv} from "crypto";
import AuthCode from "react-auth-code-input";
// @ts-expect-error no types
import Fade from "react-reveal/Fade";
// @ts-expect-error no types
import HeadShake from "react-reveal/HeadShake";
import { useCode } from "../../../hooks/useCode";
import styles from "./Witness.module.css";

const SOLUTION_LENGTH = 6;

export const Witness = () => {
  const { shake, setCode } = useCode(SOLUTION_LENGTH, "witness");

  return (
    <>
      <h1 className="title">
        <Fade top_delay={500} duration={1500}>
          Bear Witness
        </Fade>
      </h1>
      <iframe src="https://opbeav.vercel.app/main.html#CAsSAigEEgIIBBIAEgIIBBICKAUSAggKEgIIBhICKBESAggGEgIoBBICCAoSAigXEgIIChICKAQSAggGEgIoAxICCAYSAigOEgIIChICKAQSAggGEgIoEhICCAoSAigFEgIIAxIAEgIIAxICKAQYAg==_0" allowtransparency="true" width="650px" frameborder="0" height="650px"></iframe>
    </>
  );
};
