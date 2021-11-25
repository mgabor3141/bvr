import type { NextPage } from "next";
import { Cipher } from "../components/backgrounds/Cipher/Cipher";
import PageWrapper from "../components/PageWrapper";
import { Step1 } from "../components/steps/Step1/Step1";

const Home: NextPage = () => {
  return (
    <Cipher>
      <PageWrapper>
        <Step1 />
      </PageWrapper>
    </Cipher>
  );
};

export default Home;
