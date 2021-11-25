// @ts-expect-error no types
import Fade from "react-reveal/Fade";

export const Witness = () => {
  return (
    <>
      <h1 className="title">
        <Fade top delay={500} duration={1500}>
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
            Dipper&mdash; okay I guess we can wait a few more minutes while you
            mess with Gideon’s computer.
          </p>
          <br />
          <p>
            Okay, we’re nearing the file, but it seems there’s two weird
            geometric locks in our way. Surely the work of Bill. It’s unlike
            anything I’ve ever seen before, please take over.
          </p>
          <p>Stanford over and out.</p>
        </div>
      </Fade>

      <Fade delay={3500} duration={2000}>
        <iframe
          src="https://opbeav.vercel.app/main.html#CAsSAigKEgIIBBICKAMSBAgLMAMSAigZEgQICzADEgIoExIjCAkiHwgFEhkBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBGAESAigTEgQICzADEgIoBRIECAswAhICKAMSAggDEgIoHg==_0"
          width="650px"
          frameBorder="0"
          height="650px"
        />
      </Fade>
    </>
  );
};
