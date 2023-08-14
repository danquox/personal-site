import Header from "../Header"

type TAppLayout = {
  children: React.ReactNode
}

export default function AppLayout({children}: TAppLayout) {
  return (
    <>
      <Header />
      <div className="w-fit md:w-[664px] mx-auto">
        {children}
      </div>
      <div id="spacer" className="h-32"></div>
    </>
  )
}