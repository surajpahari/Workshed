import { useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import ProfileDetail from "./ProfileDetail";
const Profile = () => {
    const [activeBar, setActiveBar] = useState(1);
    const changeActiveBar = (x) => {
        setActiveBar(x)
    }
    const Nothing = () => {
        return (
            <div>
                Nothing
            </div>
        )
    }

    const renderComponent = () => {
        switch (activeBar) {
            case 1:
                return <ProfileDetail />;


            default:
                return <Nothing />;
        }
    }
    return (
        <>
            <div className=" flex mx-2 my-5  border-b-4 border-b-green-100">
                <div className="m-0 flex-grow">
                    <h1 className="m-0 font-light">Profile</h1>
                </div>
                <div>

                    Home&nbsp; / &nbsp;profile
                </div>
            </div>
            <div className="flex">
                {/*left side containder*/}
                <div className=" p-4 m-2 border-solid border border-green-500 border-t-4 rounded">
                    {/*pic and info*/}
                    <div className="flex justify-center items-center">
                        <div>
                            <div>
                                <img src="/uploads/default.png" alt="unknown.png" className="w-24 h-auto" />
                            </div>
                            <div>
                                You are user
                                <b>+</b>
                            </div>
                        </div>
                    </div>
                    {/*other detail*/}
                    <div>
                        <div className="flex border-0 gap-48 border-t border-t-gray-200 border-solid ">
                            <div className="flex py-3">
                                <div className="font-semibold">
                                    Joined Date
                                </div>
                            </div>
                            <div className="flex justify-end items-center">
                                <div>
                                    23-03-2023
                                </div>
                            </div>
                        </div>
                        <div className="flex border-0 gap-48 border-t border-t-gray-200 border-solid ">
                            <div className="flex py-3">
                                <div className="font-semibold">
                                    Email
                                </div>
                            </div>
                            <div className="flex justify-end items-center">
                                <div>
                                    work@gmail.com
                                </div>
                            </div>
                        </div>
                        <div className="flex border-0 gap-48 border-t border-t-gray-200 border-solid ">
                            <div className="flex py-3">
                                <div className="font-semibold">
                                    Phone no
                                </div>
                            </div>
                            <div className="flex justify-end items-center">
                                <div>
                                    9898989898
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-center m-2 bg-blue-400 rounded cursor-pointer">
                                <div className="text-white">
                                    9898989898
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right side contiander*/}

                <div className="flex-grow m-2 border-solid border border-green-500 border-t-4 rounded">
                    {/*top menu bar*/}
                    <div className="flex border-0 border-solid border-b border-b-gray-400">

                        <div onClick={() => { changeActiveBar(1) }}
                            className={`m-2 p-2 text-lg font-light cursor-pointer rounded  ${activeBar == 1 ? "bg-teal-500 text-white" : 'hover:bg-teal-200'}`}>
                            Profile
                        </div>
                        <div onClick={() => { changeActiveBar(2) }}
                            className={`m-2 p-2 text-lg font-light cursor-pointer rounded  ${activeBar == 2 ? "bg-teal-500 text-white" : 'hover:bg-teal-200'}`}>
                            Emergency Contact
                        </div>
                        <div onClick={() => { changeActiveBar(3) }}
                            className={`m-2 p-2 text-lg font-light cursor-pointer rounded  ${activeBar == 3 ? "bg-teal-500 text-white" : 'hover:bg-teal-200'}`}>
                            Bank Details
                        </div>
                        <div onClick={() => { changeActiveBar(4) }}
                            className={`m-2 p-2 text-lg font-light cursor-pointer rounded  ${activeBar == 4 ? "bg-teal-500 text-white" : 'hover:bg-teal-200'}`}>
                            Settings
                        </div>
                        <div onClick={() => { changeActiveBar(5) }}
                            className={`m-2 p-2 text-lg font-light cursor-pointer rounded  ${activeBar == 5 ? "bg-teal-500 text-white" : 'hover:bg-teal-200'}`}>
                            Adminstration
                        </div>
                    </div>
                    <div>
                        {renderComponent()}
                    </div>

                </div>

            </div >
        </>
    )
}
Profile.layout = (page) => (
    < DashboardLayout >
        <div className="flex-grow">
            {page}
        </div>
    </DashboardLayout >
);

export default Profile
