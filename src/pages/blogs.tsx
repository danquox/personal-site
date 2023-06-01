import { BlogData } from "@/data/blogs";
import { motion } from "framer-motion";
import { container, containerChildren } from "@/components/framer-animations/ContainerAnimation";

export default function Blogs() {
    return (
        <>
            <h1 className="text-black dark:text-white text-2xl mt-6 mb-4">Blogs</h1>
            <motion.div className="flex flex-col gap-3 w-full max-w-sm sm:max-w-xl"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {BlogData.reverse().map(blog => {
                    return (
                    <motion.a className="flex flex-col border-l-2 border-[rgb(200,200,200)] dark:border-[rgb(70,70,70)] text-black dark:text-white w-full py-1.5 px-3 rounded-l-sm" href={`/blogs/${blog.id}`} variants={containerChildren}>
                        <p>{blog.data.title}</p>
                        <p className="text-[rgb(150,150,150)] text-sm mt-1">{blog.data.description}</p>
                    </motion.a>
                    )
                })}
            </motion.div>
        </>
    )
}