import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMars } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faBriefcase, faMapMarkerAlt, faUsers, faReceipt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FiPower } from "react-icons/fi";
import { Link } from "@inertiajs/inertia-react";
import { useState } from "react";
import { usePage } from "@inertiajs/inertia-react";
import { useRemember } from '@inertiajs/react'


const DashboardLayout = ({ children }) => {
    const { url, component } = usePage()
    const [showLogout, setShowLogout] = useState(false);
    const handleShowLogout = () => {
        setShowLogout(!showLogout);
    }
    const [showSideBar, setShowSideBar] = useRemember(false);
    const handleShowSideBar = () => {
        setShowSideBar(!showSideBar)
    }
    const [showMenuTitle, setShowMenuTitle] = useState(false);
    const handleShowMenuTitle = () => {
        setShowMenuTitle(!showMenuTitle)
    }
    const MenuTitle = showMenuTitle ? "animate-contract" : "animate-expand";
    const content = [
        { icon: faHome, name: "Dashboard", link: "/dashboard", active: "/dashboard" },
        { icon: faClock, name: "Roster", link: "/dashboard", active: "/rooster" },
        { icon: faCheckCircle, name: "Task Completed", link: "/dashboard", active: "/task/completed" },
        { icon: faBriefcase, name: "Jobs", link: "/jobs/list", active: "/jobs" },
        { icon: faMapMarkerAlt, name: "Location", link: "/location", active: "/location" },
        { icon: faUsers, name: "Employee", link: "/employee", active: "/employee" },
        { icon: faReceipt, name: "PlaySlip", link: "/dashboard", active: "/playslip" },
        { icon: faUser, name: "Profile", link: "/dashboard", active: "/profile" },
    ]
    return (
        <>
            <div className="">
                <div className="flex" >
                    {/*ADMIN DASHBOARD*/}


                    <div className={`${showMenuTitle ? 'animate-contract' : 'animate-expand'} divide-y  animate-width  bg-green-100  flex-shrink-0`}>


                        {/*Title and Logo*/}
                        <div className="flex  justfiy-center items-center h-16 cursor-pointer  rounded-lg hover:bg-red-500">
                            <div className="  flex justify-center items-center icon w-12 h-full flex-shrink-0 m-1">
                                <div className="rounded-full  bg-red-50 hw-33 flex justify-center items-center ">
                                    <FontAwesomeIcon icon={faMars} className="h-full w-full " />
                                </div>
                            </div>
                            <div className=" flex  items-center text flex-grow flex-shrink-0 h-full">
                                <span className="font-medium text-2xl ">
                                    Workshed
                                </span>
                            </div>
                        </div>
                        {/*End of Title and Logo*/}

                        {/*Icon and Menu*/}
                        {content.map((item, index) => (
                            <Link
                                key={index}
                                href={item.link}
                                as="div"
                                className={`${url.startsWith(item.active) ? 'bg-teal-500 rounded-lg hover:bg-teal-500 text-white' : 'hover:bg-teal-200'} flex  justfiy-center items-center h-16 cursor-pointer rounded-lg m-1`}
                            >
                                <div className="  flex justify-center items-center icon m-1 w-12 h-full flex-shrink-0">
                                    <span>
                                        <FontAwesomeIcon icon={item.icon} />
                                    </span>
                                </div>
                                <div className=" flex items-center text  flex-grow flex-shrink-0 h-full">
                                    <span className="p-1">
                                        {item.name}
                                    </span>
                                </div>
                            </Link>
                        ))}
                        {/*End of Icon and Menu*/}

                    </div>
                    {/*END ADMIN DASHBOARD*/}

                    {/*Header and Bar*/}
                    <div className="flex-grow   relative ">
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
                                className={`${(url === '/employee') ? 'activeNav' : 'a'} cursor-pointer rounded border-purple bg-red-400 p-2 border-double w-full
`}
                            >
                                <FiPower className="mx-2" />
                                Log Out
                            </Link>
                        </div>
                        {/*End of Header and Bar*/}


                        {/*Main content*/}
                        <div className="w-full h-64">
                            <div className="flex justify-center items-center">
                                {children}
                            </div>
                        </div>
                        {/*End of main content*/}
                    </div>
                </div>


            </div >
        </>
    )
}

export default DashboardLayout
