export type TProjectWork = {
  url?: string;
  name: string;
  image: string;
  tech: string[];
}

export const ProjectWorksData: TProjectWork[] = [
  {
    url: 'https://mhndistribution.com/',
    name: "Client Website",
    image: "/projects-works-images/3e8468df-7975-43ab-b39a-bda14c146090.jpg",
    tech: [
      "NextJS", 
      "ReactJS",
      "TailwindCSS",
      "TypeScript"
    ]
  }
]