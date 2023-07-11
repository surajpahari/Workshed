import { Link } from "@inertiajs/inertia-react"
import DashboardLayout from "../Layout/DashboardLayout";

const Job = () => {
    return (
        <>
            <div className="flex grow bg-green-100">
                <div className="p-2 boder-solid border border-gray-900 cursor-pointer">
                    List
                </div>
                <div className="p-2 border-solid border border-gray-100 cursor-pointer">
                    <Link
                        href="/job-type"
                        as="div"
                    >
                        Type
                    </Link>
                </div>
                <div className="p-2 border-solid border border-black cursor-pointer">
                    Weekly shift
                </div>
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
