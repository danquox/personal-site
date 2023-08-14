import { FaSpotify } from "react-icons/fa"
import { motion } from "framer-motion"
import useSWR from "swr"
import Image from "next/image"

export default function Playlists() {
  const { data } = useSWR('get-playlists');

  return (
    <div className="flex gap-4 w-full h-fit">
      {
        data !== undefined ?
        data.map((playlist: any) => {
          return (
            <motion.a 
              key={playlist['id']} 
              className="group flex flex-col md:flex-row gap-2 bg-white/10 hover:bg-[rgb(255,255,255,0.15)] rounded-lg w-1/2 h-fit p-2" 
              href={playlist['external_urls']['spotify']} target="_blank"
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              transition={{ duration: 0.3 }}
            >
              <Image className="w-16 h-16 rounded-xl" src={playlist['images'][0]['url']} alt="" width={100} height={100} unoptimized priority/>
              <div className="flex flex-grow md:flex-col">
                <span className="text-lg md:text-xl text-white/70">{playlist['name']}</span>
                <FaSpotify className="text-white/20 group-hover:text-white/50 w-5 md:w-6 h-5 md:h-6 ml-auto mt-auto"/>
              </div>
            </motion.a>
          )
        })
        : null
      }
    </div>
  )
}