import { FC } from "react";
import Link from "next/link";
import useSWR from "swr";
import { motion } from "framer-motion";
import * as fetchers from "../lib/fetcher";
import * as anims from "../animations/index";
import Image from "next/image";

const Track: FC<{ track: fetchers.SpotifyTrack }> = ({ track }) => {
  return (
    <Link href={track.url} passHref>
      <a
        href={track.url}
        className="p-5 border border-gray-200 bg-gray-50 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 dark:border-gray-700"
        rel="noreferrer"
        target="_blank"
      >
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          {track.title}
        </h2>
        <p>{track.artist}</p>
      </a>
    </Link>
  );
};

const Artist: FC<{ artist: fetchers.SpotifyArtist }> = ({ artist }) => {
  return (
    <Link href={artist.url} passHref>
      <a
        className="flex p-5 border border-gray-200 bg-gray-50 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 dark:border-gray-700"
        rel="noreferrer"
        target="_blank"
      >
        <Image
          src={artist.img.url}
          height={100}
          width={100}
          alt={artist.name}
          className="rounded-full"
        />
        <div className="flex flex-col items-start justify-center ml-5">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {artist.name}
          </h2>
          <p className="text-xl">
            {artist.followers.toLocaleString()} followers
          </p>
        </div>
      </a>
    </Link>
  );
};

const Tracks = () => {
  const { data } = useSWR("/api/stats/tracks", fetchers.trackFetcher);

  return (
    <Music
      data={data!}
      title="My Top Tracks"
      description="My favourite genres are rap and punk. I also listen to some hyperpop and rock."
      tracks={true}
    />
  );
};

const Artists = () => {
  const { data } = useSWR("/api/stats/artists", fetchers.artistFetcher);

  return (
    <Music
      data={data!}
      title="My Top Artists"
      description="Powfu is <3"
      tracks={false}
    />
  );
};

const Music: FC<{
  data: fetchers.SpotifyTrack[] | fetchers.SpotifyArtist[];
  title: string;
  description: string;
  tracks: boolean;
}> = ({ data, title, description, tracks }) => {
  return (
    <motion.div
      className="flex flex-col mt-24"
      variants={anims.FadeContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={anims.Fade}>{title}</motion.h1>
      <motion.p className="mt-5 text-lg" variants={anims.Fade}>
        {description}
      </motion.p>
      <motion.div
        className="flex flex-col mt-10 overflow-hidden rounded"
        variants={anims.Fade}
      >
        {tracks
          ? // @ts-ignore
            data?.tracks?.map((track, index) => (
              <Track key={index} track={track} />
            )) // @ts-ignore
          : data?.artists?.map((artist, index) => (
              <Artist key={index} artist={artist} />
            ))}
      </motion.div>
    </motion.div>
  );
};

const Stats: FC = () => {
  return (
    <>
      <Tracks />
      <Artists />
    </>
  );
};

export default Stats;
