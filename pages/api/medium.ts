import type { NextApiRequest, NextApiResponse } from "next";

export const mediumUserUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@itssourabhs`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const mediumStories = await fetch(mediumUserUrl);

      const stories = await mediumStories.json();

      res.setHeader(
        "Cache-Control",
        "public, s-maxage=1200, stale-while-revalidate=600"
      );

      return res.status(200).json({
        feed: [],
      });
    }
  } catch (e: any) {
    return res.status(500).json({ message: e.message });
  }
}
