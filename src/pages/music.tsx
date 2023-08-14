import LanyardMusic from "@/components/lanyard/lanyard.music";
import Artists from "@/components/music/Artists";
import DynamicPlaylists from "@/components/music/DymamicPlaylists";
import Link from "next/link";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs"

export default function Music() {
  return (
    <div className="flex flex-col gap-4 w-screen md:w-full p-8 overflow-x-hidden">
      <Link className="flex items-center text-white/60 hover:text-white/80 bg-white/10 hover:bg-white/20 pr-2 p-1 rounded-md w-fit mr-auto" href={"/"}>
        <BsArrowLeftShort className="w-5 h-5" />
        <span>back</span>
      </Link>
      <span className="text-3xl md:text-4xl text-white font-bold tracking-wider mt-4">Music</span>
      <LanyardMusic />
      <Link className="text-white/60 hover:text-white/80 bg-white/10 hover:bg-white/20 p-1 pl-2 rounded-md ml-auto" href={"/music/recently-played"}>
        <span className="inline-block w-fit">view recently played</span>
        <BsArrowRightShort className="inline-block w-5 h-5" />
      </Link>
      <span className="text-3xl md:text-4xl text-white mt-4">Favorite Artists & Songs</span>
      <Artists />
      <span className="text-3xl md:text-4xl text-white mt-4">Playlists</span>
      <DynamicPlaylists />
    </div>
  )
}