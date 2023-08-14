import { SeriesData } from "@/assets/data/LibraryData"
import Image from "next/image"

export default function Series() {
  return (
    <div className="grid grid-cols-3 gap-2 w-full h-fit">
      {
        SeriesData.map(series => {
          return (
            <div key={series.name} className="group relative w-fit h-full">
              <Image
                className="w-48 h-52 sm:h-72 object-cover rounded-lg z-[1]"
                src={series.imageURL}
                alt={series.imageURL}
                width={100}
                height={200}
                unoptimized
              >
              </Image>
              <div className="absolute top-0 left-0 w-full h-52 sm:h72 bg-black/60 opacity-0 group-hover:opacity-100 duration-200 z-[2]">
                <div className="absolute bottom-0 left-0 m-3 my-4">
                  <span className="text-xl sm:text-2xl text-white font-bold inline-block w-full">{series.name}</span>
                  {
                    series.translation !== undefined ?
                    <span className="text-sm sm:text-base text-white/50 font-bold">
                      {series.translation}
                    </span>
                    : null
                  }
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}