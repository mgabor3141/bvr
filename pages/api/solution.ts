// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export const stepData: Record<
  string,
  { solution: string; redirectTo: string }
> = {
  step1: {
    solution: "618",
    redirectTo: "step2",
  },
  step2: {
    solution: "PRODUCE",
    redirectTo: "it_must_grow",
  },
  factorio: {
    solution: "7355608",
    redirectTo: "bear_witness",
  },
  // witness: {
  //   solution: "123456",
  //   redirectTo: "CVE_2021_22555",
  // },
  hacking: {
    solution: "iameternal",
    redirectTo: "the_end_or_is_it",
  },
};

type Data = {
  redirectTo?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (
    typeof req.query.code !== "string" ||
    !Object.keys(stepData).includes(req.query.stepName as string)
  )
    res.status(418).send({});
  else {
    const { solution, redirectTo } =
      stepData[req.query.stepName as keyof typeof stepData];

    if (req.query.code.toLowerCase() === solution.toLowerCase())
      res.status(200).json({ redirectTo });
    else res.status(418).send({});
  }
}
