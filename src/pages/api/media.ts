// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "@/lib/data.json";

type Data = {
  media: IMedia[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.query.type === "trending") {
    // filter and return trending data
    const trending = data.filter((d) => d.isTrending);
    res.status(200).json({ media: trending });
  } else if (req.query.type === "recommended") {
    // filter and return recommended data
    const recommended = data.filter((d) => !d.isTrending);
    res.status(200).json({ media: recommended });
  } else {
    // return all data
    res.status(200).json({ media: data });
  }
}
