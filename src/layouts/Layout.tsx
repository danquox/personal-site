import Header from "../components/Header";
import Footer from "../components/Footer";

type DefaultLayout = {
    children: React.ReactNode;
};

export default function Layout({children}: DefaultLayout) {
    return (
        <>
            <Header></Header>
            <main className="flex flex-col w-full">{children}</main>
            <Footer></Footer>
        </>
    )   
}