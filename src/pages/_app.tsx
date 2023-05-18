import "../styles/global.css";
import { AppProps } from "next/app"
import Layout from "../layouts/Layout"
import { ThemeProvider } from "next-themes";

export default function App({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider defaultTheme="dark" attribute="class">
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </ThemeProvider>
    )
}