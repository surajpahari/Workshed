import { Link } from "@inertiajs/inertia-react";
const SideBar = ({ children }) => {
    return (
        <>
            <Link href="/employee" method="get" as="button">
                Employee
            </Link>
            {children}
        </>
    )
}
export default SideBar;
