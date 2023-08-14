import { AiOutlineLoading3Quarters } from "react-icons/ai"
import dynamic from "next/dynamic";

const DynamicPlaylists = dynamic(() => import("@/components/music/Playlists"), {
  loading: () => <AiOutlineLoading3Quarters className="text-white/60 w-8 h-8 mx-auto my-auto animate-spin" />,
  ssr: false,
})

export default DynamicPlaylists;