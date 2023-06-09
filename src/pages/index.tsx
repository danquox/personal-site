import { motion } from "framer-motion"
import { container, containerChildren } from "@/components/framer-animations/ContainerAnimation"
import { socialContainer, socialContainerChildren } from "@/components/framer-animations/SocialLinksAnimation"
import Time from "../components/Time"
import Weather from "../components/Weather"

function Index() {
    return (
        <>  
            <motion.div
                className="flex flex-col gap-1.5 text-black dark:text-white py-14"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                <motion.h1 className="text-4xl" variants={containerChildren}>hi, i'm Dang</motion.h1>
                <motion.p className="text-xl text-[rgb(150,150,150)]" variants={containerChildren}>web developer</motion.p>
                <motion.div className="mt-2" variants={containerChildren}>
                    <Time></Time>
                </motion.div>
                <motion.div className="mt-2" variants={containerChildren}>
                    <Weather></Weather>
                </motion.div>
                <motion.div className="flex gap-6 mt-4 px-1" variants={socialContainer} initial="shidden" animate="svisible">
                    <motion.a className="group relative" variants={socialContainerChildren} href="https://github.com/danquox" target="_blank">
                        <svg className="group dark:fill-white w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
                        <p className="absolute left-0 -translate-x-[30%] text-sm bg-[rgb(0,0,0,0.8)] border-[1px] border-[rgb(30,30,30)] rounded my-1 py-0.5 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none mt-2 text-white">Github</p>
                    </motion.a>   
                    <motion.a className="group relative" variants={socialContainerChildren} href="https://discord.com/users/170987556765171714" target="_blank">
                        <svg className="group dark:fill-white w-6 h-6"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path></svg>
                        <p className="absolute left-0 -translate-x-[30%] text-sm bg-[rgb(0,0,0,0.8)] border-[1px] border-[rgb(30,30,30)] rounded my-1 py-0.5 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none mt-2 text-white">Discord</p>
                    </motion.a>
                    <motion.a className="group relative" variants={socialContainerChildren} href="https://twitter.com/_danquo" target="_blank">
                        <svg className="group dark:fill-white w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>
                        <p className="absolute left-0 -translate-x-[30%] text-sm bg-[rgb(0,0,0,0.8)] border-[1px] border-[rgb(30,30,30)] rounded my-1 py-0.5 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none mt-2 text-white">Twitter</p>
                    </motion.a>
                    <motion.a className="group relative" variants={socialContainerChildren} href="https://open.spotify.com/user/e5xari4q28t7lwxla8rggf832?si=e9173c5d38b342f2" target="_blank">
                        <svg className="group dark:fill-white w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"></path></svg>
                        <p className="absolute left-0 -translate-x-[30%] text-sm bg-[rgb(0,0,0,0.8)] border-[1px] border-[rgb(30,30,30)] rounded my-1 py-0.5 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none mt-2 text-white">Spotify</p>
                    </motion.a>
                </motion.div>
            </motion.div>
        </>
    )
}

export default Index;