import { Outlet } from "react-router-dom"
import { Navbar } from "../componensta/Navbar";


export const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />

        </>

    )
}