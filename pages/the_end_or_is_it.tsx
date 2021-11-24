import type { NextPage } from "next";
import { Timberborn } from "../components/backgrounds/Timberborn/Timberborn";
import PageWrapper from "../components/PageWrapper";
import { Reward } from "../components/steps/Reward/Reward";

const Page: NextPage = () => (
  <Timberborn>
    <PageWrapper>
      <Reward />
    </PageWrapper>
  </Timberborn>
);

export default Page;
