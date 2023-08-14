import { ArtistData } from "@/assets/data/ArtistData"
import { FaCircleChevronRight, FaChevronDown } from "react-icons/fa6"
import { useState } from "react"
import Image from "next/image"

export default function Artists() {
  const [showAll, setShowAll] = useState(false)
  const [hoveredArtist, setHoveredArtist] = useState("");

  return (
    <div id="artist-container" className="relative flex flex-col gap-4">
      {
        ArtistData.slice(0, showAll ? ArtistData.length : 3).map(artist => {
          return (
            <div key={artist.name} id={artist.name.replaceAll(" ", "-").toLowerCase()} className={`duration-300 ${hoveredArtist !== artist.name.replaceAll(" ", "-").toLowerCase() ? hoveredArtist !== "" ? "" : "" : "scale-105"}`}>
              <span className={`text-2xl md:text-3xl text-white/70 duration-500 ${hoveredArtist !== artist.name.replaceAll(" ", "-").toLowerCase() ? hoveredArtist !== "" ? "opacity-20" : "" : ""}`}>{artist.name}</span>
              <div 
                className="grid grid-cols-3 gap-3 mt-2"
                data-artist={artist.name.replaceAll(" ", "-").toLowerCase()}
                onMouseOver={e => {
                  setHoveredArtist(e.currentTarget.getAttribute("data-artist") as string)
                }}
                onMouseLeave={e => {
                  setHoveredArtist("")  
                }}
              > 
                {
                  artist.tracks.map(track => {
                    return (
                      <a className={`group relative duration-500 bg-white/10 rounded-xl ${hoveredArtist !== artist.name.replaceAll(" ", "-").toLowerCase() ? hoveredArtist !== "" ? "opacity-20" : "" : ""}`} key={artist.name + track.song} href={track.songURL} target="_blank">
                        <Image 
                          className="w-full h-full md:w-48 md:h-48 rounded-xl z-[2]" 
                          src={track.imageURL} 
                          alt={track.imageURL} 
                          width={100} height={100} 
                          unoptimized={true}
                          priority={true}
                        />
                        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-black/60 opacity-0 group-hover:opacity-100 w-full h-full p-3 sm:p-4 scale-105 duration-200 z-[3]">
                          <div className="flex flex-col -translate-y-1 group-hover:translate-y-0 duration-200">
                            <span className="text-xs sm:text-xl md:text-2xl text-white">{track.song}</span>
                            <span className="text-xs sm:text-base md:text-lg text-[rgb(170,170,170)]">{track.album}</span>
                          </div>
                          <FaCircleChevronRight className="absolute right-0 bottom-0 -translate-x-1 group-hover:translate-x-0 text-white/70 w-5 md:w-6 h-5 md:h-6 m-3 md:m-4 duration-200"/>
                        </div>
                      </a>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
      {
        !showAll ?
        <div className="absolute top-0 translate-y-4 left-1/2 -translate-x-1/2 w-[200%] h-full bg-gradient-to-b from-white/0 from-60% to-black to-95% z-[5] pointer-events-none">
          <button 
            type="button"
            className="group absolute bottom-0 w-full pointer-events-auto"
            onClick={e => {
              setShowAll(true)
            }}
          >
            <span className="text-white/60 group-hover:text-white text-lg duration-200">more</span>
            <FaChevronDown className="group-hover:translate-y-0.5 text-white/30 group-hover:text-white/60 w-full duration-200" />
          </button>
        </div>
        : 
        <div className="relative h-16">
          <button 
            type="button" 
            className="group absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
            onClick={e => {
              setShowAll(false)
            }}
          >
            <span className="text-white/40 group-hover:text-white/80 text-lg duration-200">less</span>
          </button>
        </div>
      }
    </div>
  )
}