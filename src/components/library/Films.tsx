import { FilmData } from "@/assets/data/LibraryData"
import Image from "next/image"

export default function Films() {
  return (
    <div className="grid grid-cols-3 gap-2 w-full h-fit">
      {
        FilmData.map(film => {
          return (
            <div key={film.name} className="group relative w-fit h-full">
              <Image
                className="w-48 h-52 sm:h-72 object-cover rounded-lg z-[1]"
                src={film.imageURL}
                alt={film.imageURL}
                width={100}
                height={200}
                unoptimized
              >
              </Image>
              <div className="absolute top-0 left-0 w-full h-52 sm:h-72 bg-black/60 opacity-0 group-hover:opacity-100 duration-200 z-[2]">
                <div className="absolute bottom-0 left-0 m-2 sm:m-3 my-3 sm:my-4">
                  <span className="text-lg sm:text-2xl text-white font-bold inline-block w-full">{film.name}</span>
                  {
                    film.translation !== undefined ?
                    <span className="text-sm sm:text-base text-white/50 font-bold">
                      {film.translation}
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