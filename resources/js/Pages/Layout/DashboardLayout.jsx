import Authbar from "../../UI/Navbar/Authbar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMars } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faBriefcase, faMapMarkerAlt, faUsers, faReceipt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FiPower } from "react-icons/fi";
import { Link } from "@inertiajs/inertia-react";
import { useState } from "react";
const DashboardLayout = () => {
    const [showLogout, setShowLogout] = useState(false);
    const handleShowLogout = () => {
        setShowLogout(!showLogout);
    }
    const [showSideBar, setShowSideBar] = useState(false);
    const handleShowSideBar = () => {
        setShowSideBar(!showSideBar)
    }
    const [showMenuTitle, setShowMenuTitle] = useState(false);
    const handleShowMenuTitle = () => {
        setShowMenuTitle(!showMenuTitle)
    }
    const content = [
        { icon: faHome, name: "Dashboard", link: "" },
        { icon: faClock, name: "Roster", link: "" },
        { icon: faCheckCircle, name: "TaskCompleted", link: "" },
        { icon: faBriefcase, name: "Jobs", link: "" },
        { icon: faMapMarkerAlt, name: "Location", link: "" },
        { icon: faUsers, name: "Employee", link: "" },
        { icon: faReceipt, name: "PlaySlip", link: "" },
        { icon: faUser, name: "Profile", link: "" },
    ]
    return (
        <>
            <div className="">
                <div className="flex h-[72rem]" >
                    {/*ADMIN DASHBOARD*/}
                    <div className={`bg-blue-500`}>
                        <div className="bg-green-50">
                            <div className="flex h-16 items-center">
                                <span className="m-1">
                                    <FontAwesomeIcon icon={faMars} className="h-6 w-6 text-icons" />
                                </span>
                                <span className={`m-1  ease-out duration-300 text-lg bold text-purple ${showMenuTitle ? 'block' : 'hidden'}`}>
                                    Workshed
                                </span>
                            </div>
                            <div className="p-2">
                                <div className="flex">
                                    {/* menu with icons only*/}
                                    <div className="bg-green-50 mr-1">
                                        {/*icons*/}
                                        {content.map((item, index) => (
                                            <div key={index} className="flex items-center py-2  my-1">
                                                <span className="m-1 h-6 w-6">
                                                    <FontAwesomeIcon icon={item.icon} className="h-full w-full text-icons" />
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    {/*menu with text only*/}
                                    <div>
                                        <div className={`h-full animate-width ${showMenuTitle ? 'animate-expand' : 'animate-contract'}`}>
                                            {/*menu title*/}
                                            {content.map((item, index) => (
                                                <div key={index} className="flex items-center py-2  my-1">
                                                    <span className="m-1 h-6 w-6">
                                                        <span className>{item.name}</span>
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/*
                                {content.map((item, index) => (
                                    <div key={index} className="flex items-center py-2">
                                        <span className="m-1 h-6 w-6">
                                            <FontAwesomeIcon icon={item.icon} className="h-full w-full text-icons" />
                                        </span>
                                        <span className={`m-1 bg-yellow-500 ease-out duration-300 ${showMenuTitle ? 'block' : 'hidden'}`}>{item.name}</span>
                                    </div>
                                ))}*/}
                            </div>
                        </div>
                    </div>

                    <div className="bg-green-500 flex-grow   relative ">
                        <div className="relative  bg-green-50 h-16">
                            <div className="flex justify-end p-2">
                                <div className="cursor-pointer" onClick={handleShowLogout}>
                                    you are user
                                </div>
                            </div>
                            <div className="absolute left-0 top-0 h-full">
                                <div className="h-full  ">
                                    <div className="flex justify-center items-center h-full">
                                        <div className="cursor-pointer w-8 h-6" onClick={handleShowMenuTitle}>
                                            <FontAwesomeIcon icon={faBars} className='w-full h-full' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`absolute right-0 ${showLogout ? 'block' : 'hidden'} pr-1 lg:w-32`} >
                            <Link href="/logout"
                                method="post"
                                as="button"
                                className="cursor-pointer rounded border-purple bg-red-400 p-2 border-double w-full"
                            >
                                <FiPower className="mx-2" />
                                Log Out
                            </Link>
                        </div>

                        {/*Main content*/}
                        <div className="w-full h-64">


                        </div>
                    </div>
                </div>



            </div >
        </>
    )
}

export default DashboardLayout
