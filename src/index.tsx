import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";


const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex-grow p-6">
                <Outlet />
            </main>
            <Sidebar />
        </div>
    );
};

export default Layout;