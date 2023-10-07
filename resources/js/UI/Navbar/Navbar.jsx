import { useState } from 'react';
import { Link } from "@inertiajs/inertia-react";
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
    const [dropDown, setDropDown] = useState(false);
    const handleDropDown = () => {
        setDropDown(!dropDown);
    }
    return (
        <>
            <div className="flex  justify-center items-center bg-green-50 p-4">
                <div className="  lg:w-[85rem] md:w-[56rem] w-full">
                    <div className="flex justify-center">
                        <div className=" flex items-center flex-grow h-20">
                            <h1 className="text-purple">WORKSHED</h1>
                        </div>
                        <div className="md:flex hidden items-center flex-grow h-20 bg-green-50 justify-end">
                            <Link as='div' href='/' className="m-2 text-purple font-semibold cursor-pointer text-xl leading-3">
                                Home
                            </Link>
                            <div className="cursor-pointer m-2 text-purple font-semibold text-xl">
                                Details
                            </div>
                            <div className="m-2 text-purple cursor-pointer font-semibold text-xl">
                                Features
                            </div>
                            <Link href="/signin"
                                method="get"
                                as="button"
                                className="cursor-pointer rounded border-solid border-purple bg-transparent p-2 m-2"
                            >
                                SignIn
                            </Link>
                        </div>
                        <div className="md:hidden flex items-center flex-grow">
                            <div className="flex  flex-grow justify-end items-center">
                                <div className="cursor-pointer h-6 w-6" onClick={handleDropDown}>
                                    <RxHamburgerMenu className='w-full h-full' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                    </div>
                    <div>
                    </div>
                </div>
            </div >
            <div className={`bg-green-50 md:hidden text-purple  rounded ${dropDown ? 'block' : 'hidden'}`}>
                <div>
                    Home
                </div>
                <div>
                    Features
                </div>
                <div>
                    Details
                </div>
                <div>
                    Login
                </div>
            </div>
        </>
    )
}
export default Navbar;
