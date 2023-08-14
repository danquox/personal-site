import { ProjectWorksData } from "@/assets/data/ProjectsWorksData"
import Image from "next/image"

export default function ProjectsWorks() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 w-full">
      {
        ProjectWorksData.map(project => {
          return (
            <div key={`${project.name}:${project.tech}`} className="group w-full h-fit border-2 border-white/10 hover:border-white/20 rounded-xl duration-200">
              <Image className="object-cover object-top w-full h-40 rounded-t-xl" src={project.image} alt="" width={100} height={100} unoptimized priority/>
              <div className="flex flex-col bg-white/5 rounded-b-xl p-3 h-fit duration-200">
                <span className="text-white/70 text-lg">{project.name}</span>
                {
                  project.url !== undefined ?
                  <a className="text-white/30 hover:text-white/40 hover:underline text-sm w-fit mt-1 mb-3" href={project.url} target="_blank">{project.url}</a>
                  : null
                }
                <div className="flex flex-wrap gap-2 w-full">
                  {
                    project.tech.map(tech => {
                      return (
                        <span key={`${project.name}:${tech}`} className="select-none text-sm text-white/60 bg-white/5 hover:bg-white/10 p-1 px-2 rounded-md duration-100">{tech}</span>
                      )
                    })
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