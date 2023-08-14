import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs"

import DynamicLibraryDatabase from "@/components/library/DynamicLibraryDatabase"
import Films from "@/components/library/Films"
import Series from "@/components/library/Series"

export default function Library() {
  return (
    <div className="flex flex-col gap-4 w-screen md:w-full p-8">
      <Link className="flex items-center text-white/60 hover:text-white/80 bg-white/10 hover:bg-white/20 pr-2 p-1 rounded-md w-fit mr-auto" href={"/"}>
        <BsArrowLeftShort className="w-5 h-5" />
        <span>back</span>
      </Link>
      <span className="text-3xl md:text-4xl text-white font-bold tracking-wider mt-4">Library</span>
      <div className="text-xl text-white/80 bg-white/10 rounded-xl p-4">A collection of novels that I own</div>
      <DynamicLibraryDatabase />
      <span className="text-3xl md:text-4xl text-white mt-4">Favorite Series</span>
      <Series />
      <span className="text-3xl md:text-4xl text-white mt-4">Favorite Films</span>
      <Films />
    </div>
  )
}