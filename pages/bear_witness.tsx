import type { NextPage } from "next";
import { Lines } from "../components/backgrounds/Lines/Lines";
import PageWrapper from "../components/PageWrapper";
import { Witness } from "../components/steps/Witness/Witness";

const Page: NextPage = () => (
  <Lines>
    <PageWrapper>
      <Witness />
    </PageWrapper>
  </Lines>
);

export default Page;
