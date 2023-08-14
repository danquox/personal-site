import Link from "next/link";
import { BiLogoGithub, BiLogoTwitter, BiLogoSpotify } from "react-icons/bi"

export default function Header() {
  return (
    <header className="flex items-center  w-screen md:w-[664px] mx-auto px-8 pt-8">
      <Link className="text-lg text-white/80 hover:text-white" href={"/"}>danquo</Link>
      <div className="flex items-center gap-2 ml-auto">
        <a href="https://github.com/danquox">
          <BiLogoGithub className="text-white/80 hover:text-white w-6 h-6" />
        </a>
        <a href="https://twitter.com/_danquo">
          <BiLogoTwitter className="text-white/80 hover:text-white w-6 h-6" />
        </a>
        <a href="https://open.spotify.com/user/e5xari4q28t7lwxla8rggf832?si=e9173c5d38b342f2">
          <BiLogoSpotify className="text-white/80 hover:text-white w-6 h-6" />
        </a>
      </div>
    </header>
  )
}