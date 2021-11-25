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
      <Fade delay={1500} duration={2000}>
        <div className="textBox">
          <p>
            Haha, yes! I knew you had it in ya! I’m picking up a promising
            signal, but it’s a bit far away. I’ll update you when we get closer…
          </p>
          <p>
            Kids, we’re moving out. Mabel, stop playing with the cat videos, and
            Dipper… okay I guess we can wait a few more minutes while you mess
            with Gideon’s computer.
          </p>
          <br />
          <p>
            Okay, we’re nearing the file, but it seems there’s two weird
            geometric locks in our way. And one of them is full of triangles! I
            don’t feel like dealing with anything that reminds me of Bill,
            please take over.
          </p>
          <p>Stanford over and out.</p>
        </div>
      </Fade>

      <Fade delay={3500} duration={2000}>
      <iframe src="https://opbeav.vercel.app/main.html#CAsSAigKEgIIBBICKAMSBAgLMAMSAigZEgQICzADEgIoExIjCAkiHwgFEhkBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBGAESAigTEgQICzADEgIoBRIECAswAhICKAMSAggDEgIoHg==_0" allowtransparency="true" width="650px" frameborder="0" height="650px"></iframe>
    </Fade>
    </>
  );
};
