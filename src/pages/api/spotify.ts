import { NextApiRequest, NextApiResponse } from "next";
import { getTopTracks } from "../../lib/spotify";

export default async function spotify(_: NextApiRequest, res: NextApiResponse) {
  const response = await getTopTracks();
  const { items } = await response.json();

  const tracks = items
    .slice(0, 10)
    .map(
      (track: {
        artists: { name: any }[];
        external_urls: { spotify: any };
        name: any;
      }) => ({
        artist: track.artists
          .map((_artist: { name: any }) => _artist.name)
          .join(", "),
        songUrl: track.external_urls.spotify,
        title: track.name
      })
    );

  return res.status(200).json({ tracks });
}
