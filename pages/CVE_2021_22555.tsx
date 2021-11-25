import type { NextPage } from "next";
import { Black } from "../components/backgrounds/Black/Black";
import PageWrapper from "../components/PageWrapper";
import { Hacking } from "../components/steps/Hacking/Hacking";

const Page: NextPage = () => (
  <Black>
    <PageWrapper>
      <Hacking />
    </PageWrapper>
  </Black>
);

export default Page;
