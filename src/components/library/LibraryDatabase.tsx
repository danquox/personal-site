import { useEffect, useState } from "react"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"
// Skeleton
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

type TSeries = {
  title: string;
  volume: string;
  author: string;
  type: string;
}

export default function LibraryDatabase() {
  const [pageMax, setPageMax] = useState(0);
  const [database, setDatabase] = useState([])
  const [page, setPage] = useState(1)
  useEffect(() => {
    fetch('https://x9nifekwkb.execute-api.us-east-1.amazonaws.com/dev/get-library')
    .then(response => response.json())
    .then(data => {
      setTimeout(() => {
        setDatabase(data['documents'])
        setPageMax((data['documents'].length % 10) === 0 ? data['documents'].length : Math.floor(data['documents'].length / 10) + 1)
      }, 400);
    });
  }, [])

  return (
    <>
      <div className="flex flex-col w-full h-[316px] sm:h-[440px]">
        {
          database.length === 0 ?
          <SkeletonTheme baseColor="#0e0e0ecc" highlightColor="#14141411">
           <Skeleton borderRadius={12} className="w-full h-7 sm:h-10" count={10} containerClassName="h-fit"/>
          </SkeletonTheme>
          :
          database.slice((page - 1) * 10, ((page - 1) * 10) + 10).map((series: TSeries) => {
            return (
              <a key={series.title + series.volume} className="flex items-center bg-white/5 hover:bg-white/10 w-full h-fit p-1 sm:p-2 px-2 sm:px-3 rounded-xl mb-1 duration-200" href={`https://www.google.com/search?q=${(series['title'] as string).replaceAll(" ", "+")}`} target="blank" referrerPolicy="no-referrer">
                <span className="text-sm sm:text-base text-white/60 inline-block">{series.title}</span>
                <span className="text-sm sm:text-base text-white/60 inline-block mx-1.5">{series.volume}</span>
                <span className="text-sm sm:text-base text-white/30 inline-block ml-auto">{series.author}</span>
              </a>
            )
          })
        }
      </div>
      <div className="flex w-fit h-6 ml-auto">
        <button type="button" className={`text-white ${page === 1 ? "bg-white/10 pointer-events-none" : "bg-white/20"} hover:bg-white/30 rounded-md p-1.5 duration-200 `}
          disabled={page === 1}
          onClick={e => {
            setPage(prev => (prev-1) > 1 ? (prev-1) : 1);
          }}
          >
          <FaChevronLeft className="w-3 h-3"/>
        </button>
        <span className="text-white w-8 text-center select-none">{page}</span>
        <button type="button" className={`text-white ${page === pageMax ? "bg-white/10 pointer-events-none" : "bg-white/20"} hover:bg-white/30 rounded-md p-1.5 duration-200 `}
          disabled={page === pageMax}
          onClick={e => {
            setPage(prev => (prev+1) < pageMax ? (prev+1) : pageMax);
          }}
        >
          <FaChevronRight className="w-3 h-3"/>
        </button>
      </div>
    </>
  )
}