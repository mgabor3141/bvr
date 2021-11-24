import type { NextPage } from "next";
import { Black } from "../components/backgrounds/Black/Black";
import PageWrapper from "../components/PageWrapper";
import { Factorio } from "../components/steps/Factorio/Factorio";

const Page: NextPage = () => (
  <Black>
    <PageWrapper>
      <Factorio />
    </PageWrapper>
  </Black>
);

export default Page;
