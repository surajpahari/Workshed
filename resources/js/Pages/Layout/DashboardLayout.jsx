import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/inertia-react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const DashboardLayout = ({ children }) => {
    const { url, component } = usePage()
    const [showLogout, setShowLogout] = useState(false);
    const handleShowLogout = () => {
        setShowLogout(!showLogout);
    };
    const { auth } = usePage().props;

    const [showMenuTitle, setShowMenuTitle] = useState(false);
    const handleShowMenuTitle = () => {
        setShowMenuTitle(!showMenuTitle);
    };
    const [show, setShowIconTitle] = useState(false);
    const fire = false;

    return (
        <>
            <div className="bg-green-100 h-screen fixed top-0 left-0 bottom-0" onClick={() => { setShowLogout(false) }}>
                {/*sidebar*/}
                <Sidebar showMenuTitle={showMenuTitle} role={auth.user.role_id} />
            </div>

            <div className={`${showMenuTitle ? 'left-0 md:left-14' : 'left-14 md:left-48'}
             transition-[left] duration-500 ease-in absolute bg-green-200  top-0  p-1 right-0
            h-16 overflow-visible `}
            >
                {/*topBar*/}
                <Topbar handleShowMenuTitle={handleShowMenuTitle}
                    username={auth.user.username}
                    handleShowLogout={handleShowLogout} logMenuStatus={showLogout} />
            </div>

            <div className={`${showMenuTitle ? 'left-0 md:left-14' : 'left-14 md:left-48'}
             transition-[left]  ease-in duration-500 absolute top-16 p-1  right-0 overflow-y-auto`} style={{ maxHeight: "calc(100vh - 4rem)" }}
                onClick={() => { setShowLogout(false) }}
            >
                {/*topBar*/}
                <div className="h-full">
                    {children}
                </div>
            </div>



            {fire ? showLogout ? <div>

                <div className="fixed right-0 top-16 bg-blue-50 z-10 mr-1 border border-solid border-teal-500">
                    <div className="cursor-pointer p-2">
                        <Link
                            href="/logout"
                            method="post"
                            as="div"
                        >
                            Log Out
                        </Link>
                    </div>
                    <div className="cursor-pointer p-2">
                        <div>
                            <Link
                                href="/get-profile"
                                method="get"
                                as="div"
                                onClick={() => setShowLogout(false)}
                            >
                                Profile
                            </Link>
                        </div>
                    </div>
                </div>

            </div> : '' : ''}
        </>
    );
};

export default DashboardLayout;

