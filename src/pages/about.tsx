import Lanyard from "@/components/Lanyard";
import { easeOut, motion } from "framer-motion";
import Link from "next/link";
import { container, containerChildren } from "@/components/framer-animations/ContainerAnimation";

export default function about() {
    return (
        <>
            <Lanyard></Lanyard>
            <h1 className="text-black dark:text-white text-2xl mt-6 mb-4">About</h1>
            <motion.div 
                className="flex flex-col gap-3 text-[rgb(150,150,150)] max-w-sm sm:max-w-2xl"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                <motion.p variants={containerChildren}>my names Dang</motion.p>
                <motion.p variants={containerChildren}>a 20 year old student developer</motion.p>
            </motion.div>
            <motion.div
                className="flex flex-col gap-4 my-10 text-[rgb(150,150,150)]"
                initial={{opacity:0, translateY:"20px"}}
                animate={{opacity:1, translateY:0}}
                transition={{duration:0.5, delay:0.15, ease:easeOut}}
            >
                <h1 className="text-2xl text-black dark:text-white">Likes</h1>
                <motion.div 
                    className="flex flex-col gap-3"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    
                    <motion.div variants={containerChildren}>
                        <Link className="flex w-fit" href={"/about/anime"}>
                            <p className="underline mr-1.5">anime</p>
                            {"->"}
                        </Link>
                    </motion.div>
                    <motion.div variants={containerChildren}>
                        <Link className="flex w-fit" href={"/about/novel"}>
                            <p className="underline mr-1.5">manga / manhwa</p>
                            {"->"}
                        </Link>
                    </motion.div>
                    <motion.p variants={containerChildren}>cats</motion.p>
                    <motion.div variants={containerChildren}>
                        <Link className="flex w-fit" href={"/about/keyboards"}>
                            <p className="underline mr-1.5">keyboards</p>
                            {"->"}
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    )
}