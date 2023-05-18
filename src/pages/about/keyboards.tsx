import { KeyboardData } from "@/data/keyboard";
import { motion } from "framer-motion"
import { container, containerChildren } from "@/components/framer-animations/ContainerAnimation";


export default function Keyboards() {
    return (
        <>
            <h1 className="text-white text-2xl mt-6 mb-1">Keyboards</h1>
            {/* inspiration from ven.earth */}
            <p className="text-[rgb(170,170,170)]">Some of my keyboards I own</p>
            <motion.div
                className="flex flex-col text-[rgb(170,170,170)] gap-3 py-4 sm:max-w-xl" 
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {
                    KeyboardData.map(keyboard => {
                        return (
                            <motion.p variants={containerChildren}>
                                {keyboard.name}
                            </motion.p>
                        )
                    })
                }
            </motion.div>
        </>
    )
}