import Image from "next/image";
import { TbMusicOff } from "react-icons/tb"
import { GetLanyardData } from "@/hooks/lanyard";

export default function LanyardMusic() {
  const status = GetLanyardData();

  return (
    <div className="flex gap-3 w-full h-20 md:h-24 bg-white/10 rounded-xl p-3">
      {
        status === undefined || !status.listening_to_spotify 
        ?
        <>
          <div className="relative bg-white/10 h-full aspect-square rounded-lg">
            <TbMusicOff className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[rgb(140,140,140)] h-1/2 w-1/2" />
          </div>
          <span className="text-lg md:text-xl text-white/80">not listening to anything at the moment</span>
        </>
        :
        <>
          <a className="relative h-full aspect-square rounded-lg" href={"https://open.spotify.com/track/" + status.spotify?.track_id!} target="_blank">
            <Image className="h-full w-full rounded-[inherit]" src={status.spotify?.album_art_url || ""} alt="" width={200} height={200} unoptimized priority/>
          </a>
          <div className="flex flex-col flex-grow">
            <span className="text-xl text-white/80 inline-block w-4/5 whitespace-nowrap text-ellipsis overflow-hidden">{status.spotify?.song}</span>
            <span className="text-white/50 inline-block w-4/5 whitespace-nowrap text-ellipsis overflow-hidden">by {status.spotify?.artist}</span>
          </div>
        </>
      }
    </div>
  )
}