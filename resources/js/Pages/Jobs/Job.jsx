import { Link } from "@inertiajs/inertia-react"
import DashboardLayout from "../Layout/DashboardLayout";
import { usePage } from "@inertiajs/inertia-react";

const Job = () => {
    const { url, component } = usePage();
    return (
        <>
            <div className=" flex-grow flex bg-green-100">
                <div className="p-2 boder-solid border border-gray-900 cursor-pointer">
                    <Link
                        href="/jobs/list"
                        as="div"
                        className={`${url === '/jobs/list' ? 'bg-teal-500 rounded-lg hover:bg-teal-500 text-white' : 'hover:bg-teal-200'} p-2`}
                    >
                        List
                    </Link>
                </div>
                <div className="p-2 border-solid border border-gray-100 cursor-pointer">
                    <Link
                        href="/jobs/type"
                        as="div"
                        className={`${url === '/jobs/type' ? 'bg-teal-500 rounded-lg hover:bg-teal-500 text-white' : 'hover:bg-teal-200'} p-2`}
                    >
                        Type
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
