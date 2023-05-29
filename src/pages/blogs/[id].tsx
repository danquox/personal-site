import { BlogData } from "@/data/blogs";
import { Blog } from "@/data/blogs";
import { motion } from "framer-motion";
import { container, containerChildren } from "@/components/framer-animations/ContainerAnimation";

type blogParams = {
    id: string
}

type blogObject = {
    params: blogParams
}

export async function getStaticPaths() {
    const paths = BlogData.map(blog => {
        return {
            params: {
                id: blog.id
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context: blogObject) {
    const id = context.params.id;
    return {
        props: {
            blog: BlogData[0].data
        }
    }
}

export default function Blog({blog}: {blog:BlogData}) {
    return (
        <div className="flex flex-col w-full max-w-sm sm:max-w-xl">  
            <div>
                <h1 className="text-black dark:text-white text-xl sm:text-2xl mt-6 mb-1">{blog.title}</h1>
                <p className="text-[rgb(170,170,170)] text-sm dark:text-[rgb(120,120,120)] mb-5">{blog.date}</p>
                <p className="text-[rgb(150,150,150)] text-md">{blog.description_full}</p>
                <hr className="dark:opacity-20 mt-6 mb-2"></hr>
            </div>
            <motion.div className="flex flex-col gap-3 w-full max-w-sm sm:max-w-xl"
                variants={container}
                initial="hidden"
                animate="visible"
            >   
                <div className="flex flex-col">
                    {
                        blog.details.map(detail => {
                            if (detail.type === "text") {
                                return (
                                    <p className="text-md text-[rgb(100,100,100)] dark:text-[rgb(200,200,200)] mt-6">
                                        {detail.text}
                                    </p>
                                )
                            } else if (detail.type === "desc") {
                                return (
                                    <p className="text-sm text-[rgb(150,150,150)] dark:text-[rgb(100,100,100)] my-2">
                                        {detail.desc}
                                    </p>
                                )
                            } else if (detail.type === "link") {
                                return (
                                    <span className="text-sm my-2 text-[rgb(120,120,120)] dark:text-[rgb(130,130,130)]">Github: <a className="underline" href={detail.link} target="_blank">here</a></span>
                                )  
                            } else {
                                let lines = 0;
                                return (
                                    <div className="bg-[rgb(240,240,240)] dark:bg-[rgb(15,15,15)] overflow-hidden rounded w-full h-fit pb-1">
                                        <div className="flex items-center gap-1 bg-[rgb(220,220,220)] dark:bg-[rgb(30,30,30)] h-6 px-1.5">
                                            <div className="bg-[rgb(180,180,180)] dark:bg-[rgb(70,70,70)] rounded-full aspect-square h-1/3"></div>
                                            <div className="bg-[rgb(180,180,180)] dark:bg-[rgb(70,70,70)] rounded-full aspect-square h-1/3"></div>
                                            <div className="bg-[rgb(180,180,180)] dark:bg-[rgb(70,70,70)] rounded-full aspect-square h-1/3"></div>
                                        </div>
                                        <div className="flex flex-col gap-0 py-1.5">
                                            {
                                                detail.code!.map(entry => {
                                                    return (
                                                        <div>
                                                            <p className="text-center inline-block text-sm text-[rgb(180,180,180)] dark:text-[rgb(80,80,80)] mx-1.5 w-2">{lines+=1}</p>
                                                            <p className={`inline-block text-sm text-[rgb(130,130,130)] mx-1 text-left indent-${entry.indent * 2}`}>{entry.text}</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </motion.div>
        </div>
    )
}