import Link from "next/link";
import { TbMusic } from "react-icons/tb"
import { FiBookOpen, FiCamera } from "react-icons/fi"
import ProjectsWorks from "@/components/homepage/ProjectsWorks";

export default function Index() {
  return (
    <div className="flex flex-col gap-4 w-screen md:w-full p-8">
      <span className="text-3xl md:text-4xl text-white font-bold tracking-wider mt-4">Dang Tran</span>
      <div className="text-base md:text-xl text-white/80 bg-white/10 rounded-xl p-4">
        <span>
          <span>Computer Science student working on </span>
          <span className="underline underline-offset-2">Frontend Development</span>
        </span>
      </div>
      <span className="text-3xl md:text-4xl text-white mt-4">Projects & Works</span>
      <ProjectsWorks />
      <span className="text-3xl md:text-4xl text-white mt-4">Other</span>
      <div className="flex flex-col gap-2">
        <Link className="group flex gap-3 bg-white/5 hover:bg-white/10 rounded-xl p-3 duration-200" href={"/music"}>
          <div className="flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 bg-white/5 rounded-xl">
            <TbMusic className="group-hover:scale-125 text-[rgb(140,140,140)] w-8 h-8 duration-200" />
          </div>
          <span className="text-2xl text-white/70">Music</span>
        </Link>
        <Link className="group flex gap-3 bg-white/5 hover:bg-white/10 rounded-xl p-3 duration-200" href={"/library"}>
          <div className="flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 bg-white/5 rounded-xl">
            <FiBookOpen className="group-hover:scale-125 text-[rgb(140,140,140)] w-8 h-8 duration-200" />
          </div>
          <span className="text-2xl text-white/70">Library</span>
        </Link>
        <Link className="group flex gap-3 bg-white/5 hover:bg-white/10 rounded-xl p-3 duration-200" href={"/photos"}>
          <div className="flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 bg-white/5 rounded-xl">
            <FiCamera className="group-hover:scale-125 text-[rgb(140,140,140)] w-8 h-8 duration-200" />
          </div>
          <span className="text-2xl text-white/70">Photo Album</span>
        </Link>
      </div>
    </div>
  )
}