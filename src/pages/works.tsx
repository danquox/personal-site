import Sites from "@/components/Sites";

export default function works() {
    return (
        <>
            <a className="flex items-center text-black dark:text-white border-[1px] border-[rgb(100,100,100)] shadow-lg dark:shadow-[0_0_10px_5px_rgb(255,255,255,0.1)] rounded py-1 px-3 max-w-sm sm:max-w-xl" href="https://github.com/danquox?tab=repositories" target="_blank">
                <p className="text-sm mr-1 font-bold">Github Repositories<span className="hidden sm:inline-block">,</span></p>
                <p className="text-sm hidden sm:inline-block text-[rgb(130,130,130)]">check out on github.</p>   
                <p className="text-lg ml-auto">{"->"}</p>
            </a>
            <h1 className="text-black dark:text-white text-2xl mt-6 mb-4">Sites</h1>
            <Sites></Sites>
        </>
    )
}