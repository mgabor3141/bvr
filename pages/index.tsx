import type { NextPage } from "next";
import { Lines } from "../components/backgrounds/Lines";
import PageWrapper from "../components/PageWrapper";
import { Step1 } from "../components/Step1/Step1";

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
