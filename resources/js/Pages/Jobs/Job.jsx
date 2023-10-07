import { Link } from "@inertiajs/inertia-react"
import DashboardLayout from "../Layout/DashboardLayout";
import { usePage } from "@inertiajs/inertia-react";
import { faB, faD, faTasks } from "@fortawesome/free-solid-svg-icons";
import { faBezierCurve } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";

const Job = () => {
    const { url, component } = usePage();
    return (
        <>
            <div className=" flex-grow flex bg-gray-100">
                <div className="p-2 boder-solid border border-gray-900 cursor-pointer">
                    <Link
                        href="/jobs/list"
                        as="div"
                        className={`${url === '/jobs/list' ? 'bg-teal-500 rounded-lg hover:bg-teal-500 text-white' : 'hover:bg-teal-200'} p-2`}
                    >
                        <span className="m-2">
                            <FontAwesomeIcon icon={faTasks} />
                        </span>
                        <span>
                            List
                        </span>
                    </Link>
                </div>
                <div className="p-2 border-solid border border-gray-100 cursor-pointer">
                    <Link
                        href="/jobs/type"
                        as="div"
                        className={`${url === '/jobs/type' ? 'bg-teal-500 rounded-lg hover:bg-teal-500 text-white' : 'hover:bg-teal-200'} p-2`}
                    >
                        <span className="m-2">
                            <FontAwesomeIcon icon={faBezierCurve} />
                        </span>
                        <span>
                            Types
                        </span>

                    </Link>
                </div>
                {/*<div className="p-2 border-solid border border-black cursor-pointer">
                    Weekly shift
                </div>*/}
            </div>
        </>
    )
}
Job.layout = (page) => (
    < DashboardLayout >
        {page}
    </DashboardLayout >
);



export default Job
