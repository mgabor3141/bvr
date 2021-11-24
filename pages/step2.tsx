import type { NextPage } from "next";
import { Minecraft } from "../components/backgrounds/Minecraft/Minecraft";
import PageWrapper from "../components/PageWrapper";
import { Step2 } from "../components/steps/Step2/Step2";

const Page: NextPage = () => (
  <Minecraft>
    <PageWrapper>
      <Step2 />
    </PageWrapper>
  </Minecraft>
);

export default Page;
