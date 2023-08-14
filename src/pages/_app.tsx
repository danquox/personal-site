import { useEffect } from "react"
import { AppProps } from "next/app";
import AppLayout from "@/components/layouts/AppLayout";
import { SWRConfig } from "swr/_internal";
import "@/styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      (document.getElementById('spacer') as HTMLElement).outerHTML += '<!--\n\n\t/ l、\n  （ﾟ､ ｡ ７ - fuck . \n    l  ~ヽ\n    じしf_,)ノ\n\n\n\tdanquo was here !!\n-->'
    }
  }, [])

  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => fetch(`/api/${url}`).then((response) => response.json())
      }}
    >
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </SWRConfig>
  )
}