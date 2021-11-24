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
    solution: "123456",
    redirectTo: "/",
  },
  reward: {
    solution: "123456",
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
  if (!Object.keys(stepData).includes(req.query.stepName as string))
    res.status(418).send({});
  else {
    const { solution, redirectTo } =
      stepData[req.query.stepName as keyof typeof stepData];

    if (req.query.code === solution) res.status(200).json({ redirectTo });
    else res.status(418).send({});
  }
}
