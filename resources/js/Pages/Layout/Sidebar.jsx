import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMars } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faBriefcase, faMapMarkerAlt, faUsers, faReceipt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FiPower } from "react-icons/fi";
import { Link } from "@inertiajs/inertia-react";
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { usePage } from "@inertiajs/inertia-react";
import { useRemember } from '@inertiajs/react'


const Sidebar = ({ showMenuTitle, role }) => {

    const { url, component } = usePage()

    const content = () => {
        if (role === 1) {
            return [
                { icon: faHome, name: "Dashboard", link: "/dashboard", active: "/dashboard" },
                { icon: faClock, name: "Roster", link: "/roster", active: "/roster" },
                { icon: faCheckCircle, name: "Task Completed", link: "/tasks/completed", active: "/tasks/completed" },
                { icon: faBriefcase, name: "Jobs", link: "/jobs/list", active: "/jobs" },
                { icon: faMapMarkerAlt, name: "Location", link: "/location", active: "/location" },
                { icon: faUsers, name: "Employee", link: "/employee", active: "/employee" },
                { icon: faReceipt, name: "PaySlip", link: "/payslip", active: "/payslip" },
                { icon: faUser, name: "Profile", link: "/get-profile", active: "/get-profile" },
            ]
        }
        else if (role === 0) {
            return [
                { icon: faHome, name: "Dashboard", link: "/dashboard", active: "/dashboard" },
                { icon: faClock, name: "Roster", link: "/roster", active: "/roster" },
                { icon: faCircleNotch, name: "Todo", link: '/tasks/todo', active: "/tasks/todo" },
                { icon: faCheckCircle, name: "Task Completed", link: "/tasks/completed", active: "/tasks/completed" },
                { icon: faReceipt, name: "PaySlip", link: "/payslip", active: "/payslip" },
                { icon: faUser, name: "Profile", link: "/get-profile", active: "/get-profile" },

            ]

        }

    }
    const getContent = content();
    return (
        <>
            <div className={`${showMenuTitle ? 'w-0 md:w-14' : 'w-14 md:w-48'} divide-y bg-green-100
transition-[width] ease-in duration-500
flex-shrink-0 h-full overflow-hidden`}>
                {/*Title and Logo*/}
                <div className="flex  justfiy-center items-center h-16 cursor-pointer bg-green-200">
                    <div className="  flex justify-center items-center icon w-12 h-full flex-shrink-0 m-1 mr-2">
                        <div className="rounded-full  bg-red-50 hw-33 flex justify-center items-center ">
                            W
                        </div>
                    </div>
                    <div className=" flex  items-center text flex-grow flex-shrink-0 h-full ml-2">
                        <span className="font-medium text-2xl ">
                            Workshed
                        </span>
                    </div>
                </div>
                {/*End of Title and Logo*/}

                {/*Icon and Menu*/}
                {getContent.map((item, index) => (
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
        </>
    )
}

export default Sidebar
