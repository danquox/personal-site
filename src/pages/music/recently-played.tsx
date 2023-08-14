import LastFMTopArtists from "@/components/music/lastfm/LastFMTopArtists";
import RecentlyPlayedTracks from "@/components/music/lastfm/RecentlyPlayedTracks";
import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs"

export default function RecentlyPlayed() {

  return (
    <div className="flex flex-col w-screen md:w-full p-8">
      <Link className="flex items-center text-white/60 hover:text-white/80 bg-white/10 hover:bg-white/20 pr-2 p-1 rounded-md w-fit mr-auto" href={"/music"}>
        <BsArrowLeftShort className="w-5 h-5" />
        <span>back</span>
      </Link>
      <span className="text-3xl md:text-4xl text-white font-bold tracking-wider mt-8">Recently Played</span>
      <RecentlyPlayedTracks />
      <span className="text-3xl md:text-4xl text-white font-bold tracking-wider mt-4">Top Artists</span>
      <LastFMTopArtists />
    </div>
  )
}