import type { NextPage } from "next";
import { Black } from "../components/backgrounds/Black/Black";
import { Factorio } from "../components/Factorio/Factorio";
import PageWrapper from "../components/PageWrapper";

const Page: NextPage = () => (
  <Black>
    <PageWrapper>
      <Factorio />
    </PageWrapper>
  </Black>
);

export default Page;
