import type { NextPage } from "next";
import { PureBlack } from "../components/backgrounds/PureBlack/PureBlack";
import PageWrapper from "../components/PageWrapper";
import { Landing } from "../components/steps/Landing/Landing";

const Home: NextPage = () => {
  return (
    <PureBlack>
      <PageWrapper>
        <Landing />
      </PageWrapper>
    </PureBlack>
  );
};

export default Home;
