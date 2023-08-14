import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(
    `https://${process.env.NEXT_PUBLIC_PLAYLISTSUUID}.execute-api.us-east-1.amazonaws.com/default/personalSite-GetPlaylists`
  )
  const data = await response.json()
  res.status(200).json(data)
}