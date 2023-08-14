import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs"

export default function Photos() {
  return (
    <div className="flex flex-col gap-4 w-screen md:w-full p-8">
      <Link className="flex items-center text-white/60 hover:text-white/80 bg-white/10 hover:bg-white/20 pr-2 p-1 rounded-md w-fit mr-auto" href={"/"}>
        <BsArrowLeftShort className="w-5 h-5" />
        <span>back</span>
      </Link>
      <span className="text-3xl md:text-4xl text-white font-bold tracking-wider mt-4">Photo Album</span>
      <div className="text-lg md:text-xl text-white/80 bg-white/10 rounded-xl p-4">
        Currently empty
      </div>
    </div>
  )
}