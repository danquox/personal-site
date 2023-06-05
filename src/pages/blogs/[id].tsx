import { BlogData } from "@/data/blogs";
import { motion } from "framer-motion"
import { container, containerChildren } from "@/components/framer-animations/ContainerAnimation";

type paramsT = {
    id: string
} 

export const getBlogData = (id:string) => {
    let target = {};
    BlogData.forEach(blog => {
        if (blog.id === id) {
            target = blog.data
        }
    })
    return {
        id, 
        ...target
    }
}

export const getStaticPaths = async() => {
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

export const getStaticProps = async({ params }: { params:paramsT }) => {
    const blogData = getBlogData(params.id);
    return {
        props: {
            blogData
        }
    }
}

export default function Blog({ blogData }: { blogData: BlogData }) {
    return (
        <>
            <a className="text-[rgb(150,150,150)] text-sm hover:underline" href="/blogs">{"<"} back to blogs</a>
            <div className="flex flex-col w-full max-w-sm sm:max-w-xl">  
                <div>
                    <h1 className="text-black dark:text-white text-xl sm:text-2xl mt-6 mb-1">{blogData.title}</h1>
                    <p className="text-[rgb(170,170,170)] text-sm dark:text-[rgb(120,120,120)] mb-5">{blogData.date}</p>
                    <p className="text-[rgb(150,150,150)] text-md">{blogData.description_full}</p>
                    <hr className="dark:opacity-20 mt-6 mb-2"></hr>
                </div>
                <motion.div className="flex flex-col gap-3 w-full max-w-sm sm:max-w-xl"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >   
                    {
                        blogData.details.map(detail => {
                            if (detail.type === "text") {
                                return (
                                    <motion.p className="text-md text-[rgb(100,100,100)] dark:text-[rgb(200,200,200)] mt-6" variants={containerChildren}>
                                        {detail.text}
                                    </motion.p>
                                )
                            } else if (detail.type === "desc") {
                                return (
                                    <motion.p className="text-sm text-[rgb(150,150,150)] dark:text-[rgb(100,100,100)] my-2" variants={containerChildren}>
                                        {detail.desc}
                                    </motion.p>
                                )
                            } else if (detail.type === "link") {
                                return (
                                    <motion.span className="text-sm my-2 text-[rgb(120,120,120)] dark:text-[rgb(130,130,130)]" variants={containerChildren}>Github: <a className="underline" href={detail.link} target="_blank">here</a></motion.span>
                                )  
                            } else {
                                let lines = 0;
                                return (
                                    <motion.div className="bg-[rgb(240,240,240)] dark:bg-[rgb(15,15,15)] overflow-hidden rounded w-full h-fit pb-1" variants={containerChildren}>
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
                                                            <p className={`inline-block text-sm text-[rgb(130,130,130)] mx-1`} style={{paddingLeft: entry.indent * 10}}>{entry.text}</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </motion.div>
                                )
                            }
                        })
                    }
                </motion.div>
            </div>
        </>
    )
}