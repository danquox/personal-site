import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse ) => {
  const { period } = req.query;
  const response = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=danquo19&api_key=${process.env.NEXT_PUBLIC_LASTFM}&format=json&period=${period}&limit=6`
  )
  const data = await response.json()
  res.status(200).json(data['topartists']['artist']);
}