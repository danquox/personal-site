import Link from "next/link"
import ThemeButton from "./ThemeButton"

export default function Header() {
    return (
        <header className="flex items-center gap-1.5 text-black dark:text-white h-14 py-10">
            <a className="flex items-center gap-2 h-full" href="/"> 
                <p>danquo</p>
            </a>
            <div className="flex gap-2 text-[rgb(150,150,150)] mx-2">
                <a href="/works">works</a>
                <a href="/about">about</a>
            </div>
            <ThemeButton></ThemeButton>
        </header>
    )
}