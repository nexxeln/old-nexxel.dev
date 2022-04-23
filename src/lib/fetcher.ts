export const trackFetcher = async (
  input: RequestInfo,
  init?: RequestInit
): Promise<SpotifyTrack[]> => {
  const res = await fetch(input, init);
  return res.json();
};

export const artistFetcher = async (
  input: RequestInfo,
  init?: RequestInit
): Promise<SpotifyArtist[]> => {
  const res = await fetch(input, init);
  return res.json();
};

export type SpotifyTrack = {
  artist: string;
  title: string;
  url: string;
};

export type SpotifyArtist = {
  name: string;
  url: string;
  followers: number;
  img: { url: string };
};
