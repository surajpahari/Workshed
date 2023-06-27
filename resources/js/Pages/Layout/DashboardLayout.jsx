
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
                <div className="flex" >
                    {/*ADMIN DASHBOARD*/}

                    <div className={`${showMenuTitle ? 'animate-contract' : 'animate-expand'} animate-width bg-red-500`}>

                        {/*Title and Logo*/}
                        <div className="flex bg-green-500 justfiy-center items-center h-16 cursor-pointer">
                            <div className="  flex justify-center items-center icon bg-sky-500 w-12 h-full flex-shrink-0">
                                <span>
                                    <FontAwesomeIcon icon={faMars} />
                                </span>
                            </div>
                            <div className=" flex items-center text bg-orange-500 flex-grow flex-shrink-0 h-full">
                                <span className="p-1">
                                    Workshed
                                </span>
                            </div>
                        </div>
                        {/*End of Title and Logo*/}
                        {content.map((item, index) => (
                            <div className="flex bg-green-500 justfiy-center items-center h-16 cursor-pointer">
                                <div className="  flex justify-center items-center icon bg-sky-500 w-12 h-full flex-shrink-0">
                                    <span>
                                        <FontAwesomeIcon icon={item.icon} />
                                    </span>
                                </div>
                                <div className=" flex items-center text bg-orange-500 flex-grow flex-shrink-0 h-full">
                                    <span className="p-1">
                                        {item.name}
                                    </span>
                                </div>
                            </div>


                        ))}

                        {/*End of Icon and Menu*/}
                    </div>
                    {/*END ADMIN DASHBOARD*/}

                    {/*Header and Bar*/}
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
                        {/*End of Header and Bar*/}

                        {/*Main content*/}
                        <div className="w-full h-64">
                            <div className="flex justify-center items-center">
                                <h1>Your Content Goes Here</h1>

                            </div>
                        </div>
                    </div>
                </div>



            </div >
        </>
    )
}

export default DashboardLayout
