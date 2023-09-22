import { useEffect, useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import ProfileDetail from "./ProfileDetail";
import SettingForm from "./SettingForm";
import Administration from "./Administration";
import axios from "axios";
import { ModalContextProvider } from "../../../ModalContext";
import ConfirmModal from "../../../Modals/ConfirmModal";
const Profile = ({ username, email, phone, created_at }) => {
    const [activeBar, setActiveBar] = useState(1);
    const changeActiveBar = (x) => {
        setActiveBar(x)
    }
    //dummy component
    const Nothing = () => {
        return (
            <div>
                Nothing
            </div>
        )
    }

    const dateExtract = (dateString) => {
        const dateTime = new Date(dateString)
        const date = dateTime.toISOString().split('T')[0];
        return date;
    }
    //to renderComponent accordance to selected menu
    const renderComponent = () => {
        switch (activeBar) {
            case 1:
                return <ProfileDetail username={username} phone_no={phone} email={email} />;

            case 3:
                return <SettingForm />
            case 4:
                return <Administration />

            default:
                return <Nothing />;
        }
    }
    //getting details required for the view
    // const [profile, setProfile] = useState(null);
    // async function getData() {
    //     const url = `http://localhost:8000/get-profile`;
    //     const response = await axios.get(url);
    //     setProfile(response.data);
    //
    // }
    // useEffect(
    //     () => {
    //         getData()
    //     }
    //     , []
    //
    // )
    // useEffect(
    //     () => {
    //         console.log(profile)
    //     }, [profile])
    //
    return (
        <>
            <ModalContextProvider>
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
                    <div>
                        <div className=" p-4 m-2 border-solid border border-green-500 border-t-4 rounded">
                            {/*pic and info*/}
                            <div className="flex justify-center items-center">
                                <div>
                                    <div>
                                        <img src="/uploads/default.png" alt="unknown.png" className="w-24 h-auto" />
                                    </div>
                                    <div className="flex justify-center">
                                        <div>
                                            {username}
                                            <b>+</b>
                                        </div>
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
                                            {dateExtract(created_at)}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex border-0 gap-48 border-t border-t-gray-200 border-solid ">
                                    <div className="flex py-3">
                                        <div className="font-semibold">
                                            Email
                                        </div>
                                    </div>
                                    <div className="flex grow justify-end items-center">
                                        <div>
                                            {email}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex border-0 gap-48 border-t border-t-gray-200 border-solid ">
                                    <div className="flex py-3">
                                        <div className="font-semibold">
                                            Phone no
                                        </div>
                                    </div>
                                    <div className="flex grow justify-end items-center">
                                        <div>
                                            {phone ? phone : "----------"}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-center m-2 bg-blue-400 rounded cursor-pointer">
                                        <div className="text-white">

                                            {phone ? phone : "----------"}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* right side contiander*/}
                    <div className="grow">
                        <div className=" m-2 border-solid border border-green-500 border-t-4 rounded">
                            {/*top menu bar*/}
                            <div className="flex border-0 border-solid border-b border-b-gray-400">

                                <div onClick={() => { changeActiveBar(1) }}
                                    className={`m-2 p-2 text-lg font-light cursor-pointer rounded  ${activeBar == 1 ? "bg-teal-500 text-white" : 'hover:bg-teal-200'}`}>
                                    Profile
                                </div>
                                <div onClick={() => { changeActiveBar(2) }}
                                    className={`m-2 p-2 text-lg font-light cursor-pointer rounded  ${activeBar == 2 ? "bg-teal-500 text-white" : 'hover:bg-teal-200'}`}>
                                    Bank Details
                                </div>
                                <div onClick={() => { changeActiveBar(3) }}
                                    className={`m-2 p-2 text-lg font-light cursor-pointer rounded  ${activeBar == 3 ? "bg-teal-500 text-white" : 'hover:bg-teal-200'}`}>
                                    Settings
                                </div>
                                <div onClick={() => { changeActiveBar(4) }}
                                    className={`m-2 p-2 text-lg font-light cursor-pointer rounded  ${activeBar == 4 ? "bg-teal-500 text-white" : 'hover:bg-teal-200'}`}>
                                    Administration
                                </div>

                            </div>
                            <div>
                                {renderComponent()}
                            </div>

                        </div>
                    </div>
                </div >
                <ConfirmModal />
            </ModalContextProvider>
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
