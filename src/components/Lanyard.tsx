import { GetLanyardData } from "@/hooks/lanyard";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Lanyard() {
    const discordActivity = GetLanyardData();
    const [overFlow, setOverFlow] = useState(false);

    try {
        return (
            <>
                <div className="flex gap-2">
                    <div className="flex items-center gap-2 text-black dark:text-white border-[1px] border-[rgb(100,100,100)] shadow-lg dark:shadow-[0_0_10px_5px_rgb(255,255,255,0.1)] rounded py-1.5 px-3 h-[38px] w-[90px] min-w-[90px]">
                        <div className={`w-3 h-3 rounded-full ${(discordActivity?.discord_status === "offline") ? "bg-[rgb(140,140,140)]" : "animate-pulse bg-[rgb(37,118,37)]"}`}></div>
                        <p className="text-sm">{(discordActivity?.discord_status === "offline") ? "Offline" : "Online"}</p>
                    </div>
                    {
                        (discordActivity?.listening_to_spotify) ?
                        <div id="spotify-listening" className="text-sm flex items-center text-black dark:text-white border-[1px] border-[rgb(100,100,100)] shadow-lg dark:shadow-[0_0_10px_5px_rgb(255,255,255,0.1)] rounded py-1.5 px-3 h-[38px] max-w-[calc(100%-90px)] overflow-hidden"
                            onMouseOver={(e) => {
                                let spotifySong = document.getElementById("spotify-s");
                                if (spotifySong === null) return;
                                if (spotifySong?.scrollWidth > spotifySong?.offsetWidth) {
                                    setOverFlow(true);
                                }
                            }}
                            onMouseLeave={() => {
                                setOverFlow(false);
                            }}
                        >   
                            <motion.div className={`flex items-center gap-1 ${(overFlow) ? "" : "overflow-hidden"}`}
                                initial={{translateX: 0}}
                                animate={
                                    (overFlow) ? {
                                        translateX:[0,-1*(document.getElementById("spotify-s")!.scrollWidth - document.getElementById("spotify-s")!.offsetWidth), 0]
                                    } : {translateX: 0}
                                }
                                transition={
                                    { repeat:(overFlow) ? Infinity : 0, ease:"linear", duration: (overFlow) ? 4 : 0}
                                }
                            >
                                <p id="spotify-m" className="whitespace-nowrap">Listening to</p>
                                <a id="spotify-s" className={`${(overFlow) ? "": "overflow-hidden text-ellipsis"} whitespace-nowrap underline`} href={`https://open.spotify.com/track/${discordActivity.spotify?.track_id}`} target="_blank">{discordActivity.spotify?.song}</a>
                            </motion.div>
                        </div>
                        : null
                    }
                </div>
            </>
        )
    } catch {return null};
}