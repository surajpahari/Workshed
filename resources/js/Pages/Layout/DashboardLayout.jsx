import React, { useState } from "react";
import { FiPower } from "react-icons/fi";
import { Link, usePage } from "@inertiajs/inertia-react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const DashboardLayout = ({ children }) => {
    const { url, component } = usePage()
    const [showLogout, setShowLogout] = useState(false);
    const handleShowLogout = () => {
        setShowLogout(!showLogout);
    };

    const [showMenuTitle, setShowMenuTitle] = useState(false);
    const handleShowMenuTitle = () => {
        setShowMenuTitle(!showMenuTitle);
    };

    return (
        <>
            <div className="bg-green-100 h-screen  fixed top-0 left-0 bottom-0">
                {/*sidebar*/}
                <Sidebar showMenuTitle={showMenuTitle} />
            </div>
            <div className={`${showMenuTitle ? 'animate-contractR' : 'animate-expandR'}
             animate-position absolute bg-green-200 top-0  right-0  h-16`}>
                {/*topBar*/}
                <Topbar handleShowMenuTitle={handleShowMenuTitle} />
            </div>
            <div className={`${showMenuTitle ? 'animate-contractR' : 'animate-expandR'}
             animate-position absolute  top-16  right-0  `}>
                {/*topBar*/}
                {children}
            </div>
        </>
    );
};

export default DashboardLayout;

