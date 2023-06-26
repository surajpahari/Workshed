import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import { FiPower } from "react-icons/fi";

const Authbar = ({ tooglerFunction = () => { } }) => {
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
                <div className="absolute left-0 top-0 h-full">
                    <div className="h-full  ">
                        <div className="flex justify-center items-center h-full">
                            <div className="cursor-pointer w-8 h-6">
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
        </>

    )
}
export default Authbar;
