import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Layout() {
    return (
        <>
            <Header />

            <div className="w-[94%] md:w-[92%] lg:w-[90%] xl:w-[88%] mx-auto">
                <Outlet />
            </div>

            <Footer />
        </>
    )
}
