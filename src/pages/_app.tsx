import "../styles/global.css";
import { AppProps } from "next/app"
import Layout from "../layouts/Layout"
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";

export default function App({Component, pageProps}: AppProps) {
    const router = useRouter();
    return (
        <ThemeProvider defaultTheme="dark" attribute="class">
            <Layout>
                <Component {...pageProps} key={router.asPath} />
            </Layout>
        </ThemeProvider>
    )
}