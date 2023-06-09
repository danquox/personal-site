interface code {
    indent: number
    text: string
}

interface BlogDetails { 
    type: string
    text?: string
    desc?: string
    link?: string
    code?: code[]
}

export interface BlogData {
    title: string
    description: string
    description_full: string
    date: string
    details: BlogDetails[]
}

export interface Blog {
    id:string
    data: BlogData
}

export const BlogData: Blog[] = [
    {
        id: "1",
        data: {
            title: "Rendering LocalStorage in NextJS",
            description: "Using data from browser local storage in NextJS",
            description_full: "When trying to use localStorage how I had usually done previously using the React framework, I was met with an error of \"window not defined\". Here is how I managed to fix that.",
            date: "May 29th, 2023",
            details: [
                {
                    type: "text",
                    text: "Create file \"LocalStorage.tsx\""
                },
                {
                    type: "desc",
                    desc: "This creates a check for if the local window is undefined or not"
                },
                {
                    type: "code",
                    code: [
                        {indent: 0, text: 'export const getFromStorage = (key:string) => {'},
                        {indent: 2, text: 'if (typeof window !== "undefined") {'},
                        {indent: 4, text: 'if (window.localStorage.getItem(key) === null) {'},
                        {indent: 6, text: 'window.localStorage.setItem(key, "[]");'},
                        {indent: 4, text: '}'},
                        {indent: 4, text: 'return ("[]");'},
                        {indent: 2, text: '}'},
                        {indent: 2, text: 'return window.localStorage.getItem(key);'},
                        {indent: 0, text: '}'},
                    ]
                },
                {
                    type: "text",
                    text: "In another file"
                },
                {
                    type: "desc",
                    desc: "Use React's useEffect hook to use the new function"
                },
                {
                    type: "code",
                    code: [
                        {indent:0, text: "useEffect(() => {"},
                        {indent:2, text: "getFromStorage(\"key\");"},
                        {indent:0, text: "}, [])"}
                    ]
                },
                {
                    type: "text",
                    text: "And now you're able to use the browsers local storage to render items!"
                },
                {
                    type: "desc",
                    desc: "Working example and source code can be found at:"
                },
                {
                    type: "link",
                    link: "https://github.com/danquox/notes-app"
                }
            ]
        }
    },
    {
        id: "2",
        data: {
            title: "Adding Font Awesome to my Projects",
            description: "Using Font Awesome Icons in React and Next",
            description_full: "I've started to use Font Awesome Icons a lot in my personal projects, and I thought that I would talk about it so that I don't forget 😅",
            date: "June 1st, 2023",
            details: [
                {
                    type: "text",
                    text: "Install these packages"
                },
                {
                    type: "code",
                    code: [
                        {indent:0, text: "npm install --save @fortawesome/fontawesome-svg-core"},
                        {indent:0, text: "npm install --save @fortawesome/free-solid-svg-icons"},
                        {indent:0, text: "npm install --save @fortawesome/react-fontawesome"}
                    ]
                },
                {
                    type: "text",
                    text: "In your root layout or app file"
                },
                {
                    type: "code",
                    code: [
                        {indent:0, text: "import \"@fortawesome/fontawesome-svg-core/styles.css\";"},
                        {indent:0, text: "import { config } from \"@fortawesome/fontawesome-svg-core\";"},
                        {indent:0, text: "config.autoAddCss = false;"}
                    ]
                },
                {
                    type: "text",
                    text: "In another file"
                },
                {
                    type: "desc",
                    desc: "You can now import the FontAwesomeIcon component"
                },
                {
                    type: "code",
                    code: [
                        {indent:0, text: "import { FontAwesomeIcon } from \"@fortawesome/react-fontawesome\";"},
                        {indent:0, text: "import { faCircle } from \"@fortawesome/free-solid-svg-icons\";"},
                        {indent:0, text: ""},
                        {indent:0, text: "<FontAwesomeIcon icon={faCircle}>"},
                    ]
                },
            ]
        }
    }
]