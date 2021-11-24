// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { SOLUTION } from "./solution";

type Data = {
  redirectTo?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.query.code === SOLUTION.step1)
    res.status(200).json({ redirectTo: "step2" });
  else res.status(418).send({});
}
