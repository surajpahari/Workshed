import { Link } from "@inertiajs/inertia-react";
import Sidebar from "../../UI/Sidebar/Sidebar";
const SideBar = ({ children }) => {
    return (
        <>

            <Sidebar />
            <Link href="/employee" method="get" as="button">
                Employee
            </Link>
            {children}
        </>
    )
}
export default SideBar;
