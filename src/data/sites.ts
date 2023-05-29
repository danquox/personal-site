export interface Site {
    name: string
    href: string
    src: string
    languages: Array<string>
}

export const SiteData: Site[] = [
    {
        name: "Personal Site",
        href: "danquo.com",
        src: "/img/personal.png",
        languages: ["TypeScript", "ReactJS", "NextJS", "TailwindCSS"]
    },
    {
        name: "Library",
        href: "library.danquo.com",
        src: "/img/library.png",
        languages: ["JavaScript", "ReactJS"]
    },
    {
        name: "Client Site",
        href: "wcityseller.com",
        src: "/img/client.png",
        languages: ["JavaScript", "ReactJS", "TailwindCSS"]
    },
    {
        name: "Notes App",
        href: "notes.danquo.com",
        src: "/img/notes.png",
        languages: ["TypeScript", "NextJS", "TailwindCSS",]
    }
]