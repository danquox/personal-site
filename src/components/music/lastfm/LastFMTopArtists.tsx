import { useState } from "react";
import useSWR from "swr";
// Skeleton
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

type TArtist = {
  name: string;
  playcount: string;
  url: string;
}

export default function LastFMTopArtists() {
  const [period, setPeriod] = useState("7day")
  const { data } = useSWR(`/lastfm/top-artists?period=${period}`)

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mt-3">
        <button
          type="button"
          className={`${period === "7day" ? "text-white/90 bg-white/20": "text-white/60 bg-white/10 hover:text-white/80 hover:bg-[rgb(255,255,255,0.15)]"} rounded-md p-1 px-2.5`}
          onClick={e => {
            setPeriod("7day")
          }}
        >
          this week</button>
        <button
          type="button"
          className={`${period === "1month" ? "text-white/90 bg-white/20": "text-white/60 bg-white/10 hover:text-white/80 hover:bg-[rgb(255,255,255,0.15)]"} rounded-md p-1 px-2.5`}
          onClick={e => {
            setPeriod("1month")
          }}
        >
          this month</button>
        <button
          type="button"
          className={`${period === "overall" ? "text-white/90 bg-white/20": "text-white/60 bg-white/10 hover:text-white/80 hover:bg-[rgb(255,255,255,0.15)]"} rounded-md p-1 px-2.5`}
          onClick={e => {
            setPeriod("overall")
          }}
        >
          all time</button>
      </div>
      {
        data !== undefined ?
        <div className="flex flex-col gap-1 my-4" id={period}>
          {
            data.map((artist: TArtist) => {
              return (
                <a className="group bg-white/5 hover:bg-white/10 p-1 px-2 rounded-md" key={artist.name} href={artist.url} target="_blank">
                  <span className="text-white/60 group-hover:text-white">{artist.name}</span>
                  <span className="text-white/30 group-hover:text-white/60 float-right">{artist.playcount}</span>
                </a>
              )
            })
          }
        </div>
        : 
        <SkeletonTheme baseColor="#0e0e0ecc" highlightColor="#14141411">
          <Skeleton inline={true} borderRadius={6} className="w-full h-8" count={6} containerClassName="flex flex-col gap-1 my-4 h-fit"/>
        </SkeletonTheme>
      }
    </div>
  )
}