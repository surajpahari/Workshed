import { Link } from "@inertiajs/inertia-react";
const EmployeeLayout = ({ children }) => {

    return (
        <>
            <Link as="button" href="/employee-add" method="get">
                Add
            </Link>
            <Link as="button" href="/employee-list">
                List
            </Link>
            {children}
        </>
    )
}

export default EmployeeLayout;
