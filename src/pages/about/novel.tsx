import { NovelData } from "@/data/novels";
import { motion } from "framer-motion"
import { container, containerChildren } from "@/components/framer-animations/ContainerAnimation";
import Image from "next/image";

export default function Novel() {
    return (
        <>
            <h1 className="text-black dark:text-white text-2xl mt-6 mb-1">Manga / Manhwa</h1>
            {/* inspiration from ven.earth */}
            <p className="text-[rgb(150,150,150)]">Some of my favorite manga / manhwa series</p>
            <motion.div
                className="flex flex-col gap-4 py-4 sm:max-w-xl" 
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {
                    NovelData.map(novel => {
                        return (
                            <motion.a variants={containerChildren} className="grou shadow-lg dark:shadow-none rounded-xl relative text-white" href={novel.href} target="_blank"
                                whileHover={{
                                    scale: 1.035,
                                    transition: {
                                        duration: 0.2
                                    }
                                }}
                            >
                                <Image className={`group object-cover object-${novel.position} h-32 max-h-24 sm:max-h-32 rounded-xl`} src={novel.src} alt={novel.src} width="1000" height="1000" unoptimized={true}></Image>
                                <div className="opacity-0 group-hover:opacity-100 absolute flex items-center justify-center transition-opacity duration- bg-[rgb(0,0,0,0.75)] h-full w-full rounded-xl top-0 text-white">
                                    <p className="text-white text-lg font-['InterBold'] font-extrabold">{novel.title}</p>
                                    <div className="absolute text-xl right-0 top-0 -rotate-45 mx-1">{"->"}</div>
                                </div>
                            </motion.a>
                        )
                    })
                }
            </motion.div>
        </>
    )
}