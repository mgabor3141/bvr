import type { NextPage } from "next";
import { Lines } from "../components/backgrounds/Lines";
import PageWrapper from "../components/PageWrapper";
import { Step2 } from "../components/Step2/Step2";

const Step2Page: NextPage = () => (
  <Lines>
    <PageWrapper>
      <Step2 />
    </PageWrapper>
  </Lines>
);

export default Step2Page;
