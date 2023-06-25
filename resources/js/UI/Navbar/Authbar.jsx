import { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import { FiPower } from "react-icons/fi";

const Authbar = () => {
    const [showLogout, setShowLogout] = useState(false);
    const handleShowLogout = () => {
        setShowLogout(!showLogout);
    }
    return (
        <>
            <div className="relative p-2 bg-green-50">
                <div className="flex justify-end p-2">
                    <div className="cursor-pointer" onClick={handleShowLogout}>
                        you are user
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
        </>

    )
}
export default Authbar;
