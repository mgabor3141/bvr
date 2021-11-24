import type { NextPage } from "next";
import { Black } from "../components/backgrounds/Black/Black";
import PageWrapper from "../components/PageWrapper";

const Page: NextPage = () => (
  <Black>
    <PageWrapper>
      <h1>You thought you were smart, didn&apos;t you? :)</h1>
      <p>404 btw</p>
    </PageWrapper>
  </Black>
);

export default Page;
