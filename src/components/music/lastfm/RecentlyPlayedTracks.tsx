import Image from "next/image";
import useSWR from "swr"
import { FaCircleChevronRight, FaChevronDown } from "react-icons/fa6"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

type TSong = {
  artist: string;
  name: string;
  imageURL: string;
  url: string;
}

export default function RecentlyPlayedTracks() {
  const { data } = useSWR('/lastfm/recent-tracks')

  return (
    <>
      {
        data !== undefined ?
        <div className="grid grid-cols-3 gap-3 my-6">
          {
            data.slice(0, 12).map((song: TSong) => {
              return (
                <div key={`${song.artist}:${song.name}`} className="group relative bg-white/10 h-full w-full aspect-square rounded-lg">
                  <Image 
                    className="w-full h-full rounded-lg"
                    src={song.imageURL}
                    alt={song.imageURL}
                    width={100} height={100}
                    unoptimized
                    priority
                  />
                  <a className="absolute top-0 left-0 bg-black/60 opacity-0 group-hover:opacity-100 h-full w-full p-3 sm:p-4 rounded-lg transition-opacity duration-200" href={song.url} target="_blank">
                    <div className="flex flex-col -translate-y-1 group-hover:translate-y-0 transition-transform duration-200">
                      <span className="text-xs sm:text-xl md:text-2xl text-white">{song.name}</span>
                      <span className="text-xs sm:text-base md:text-lg text-[rgb(170,170,170)]">{song.artist}</span>
                    </div>
                    <FaCircleChevronRight className="absolute right-0 bottom-0 -translate-x-1 group-hover:translate-x-0 text-white/70 w-5 md:w-6 h-5 md:h-6 m-3 md:m-4 transition-transform duration-200"/>
                  </a>
                </div>
              )
            }) 
          }
        </div>
        :
        <SkeletonTheme baseColor="#0e0e0ecc" highlightColor="#14141411">
          <Skeleton inline={true} borderRadius={12} className="w-full h-full aspect-square" count={12} containerClassName="grid grid-cols-3 gap-3 my-6"/>
        </SkeletonTheme>     
      }
    </>
  )
}