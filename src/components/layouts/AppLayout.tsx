import Head from "next/head"
import Header from "../Header"

type TAppLayout = {
  children: React.ReactNode
}

export default function AppLayout({children}: TAppLayout) {
  return (
    <>
      <Header />
      <Head>
        <title>danquo</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
      </Head>
      <div className="w-fit md:w-[664px] mx-auto">
        {children}
      </div>
      <div id="spacer" className="h-32"></div>
    </>
  )
}