import type { NextPage } from "next";
import { Lines } from "../components/backgrounds/Lines/Lines";
import PageWrapper from "../components/PageWrapper";
import { Step1 } from "../components/steps/Step1/Step1";

const Home: NextPage = () => {
  return (
    <Lines>
      <PageWrapper>
        <Step1 />
      </PageWrapper>
    </Lines>
  );
};

export default Home;
