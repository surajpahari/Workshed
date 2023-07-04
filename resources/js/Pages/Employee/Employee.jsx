import ReactModal from "react-modal";
import CreateEmployee from "../Forms/CreateEmployee";
import DashboardLayout from "../Layout/DashboardLayout";
import { Inertia } from "@inertiajs/inertia";
import ListEmployee from "./ListEmployee";
import { Toaster, toast } from "react-hot-toast";
import SearchEmployee from "./SearchEmployee";
import { useEffect, useState } from "react";
import { usePage } from '@inertiajs/inertia-react'
import { Toast } from "bootstrap";

const Employee = () => {
    const [openModal, setOpenModal] = useState(false);
    const handleModal = () => {
        setOpenModal(!openModal);
        console.log(true);
    }
    return (
        <>
            <Toaster />
            <div className="flex-grow">
                {/*Heading*/}
                <div className=" flex mx-2 my-5  border-b-4 border-b-green-100">
                    <div className="m-0 flex-grow">
                        <h1 className="m-0 font-light">Employee</h1>
                    </div>
                    <div>

                        Home&nbsp; / &nbsp;Employee
                    </div>
                </div>
                {/*Heading*/}

                <div className="m-4  bg-gray-100">
                    {/*list and add bar*/}
                    <div className="p-4 flex justify-center items-center border-solid border border-t-4 border-b-0 border-teal-500 rounded-t">
                        <div className="flex-grow">
                            <div>
                                <span className="text-base">List</span>
                            </div>
                        </div>
                        <div className="cursor-pointer">
                            <button className=" cursor-pointer p-2 font-semibold text-base rounded border-0 bg-sky-300 text-white"
                                onClick={handleModal}
                            >+Add</button>
                        </div>
                    </div>
                    {/*end of list and add bar*/}

                    {/*Search bar*/}
                    <div className="border-solid border border-b-0 border-teal-500">
                        <div className="flex justify-end">
                            <SearchEmployee />
                        </div>
                    </div>
                    {/*end of search bar*/}
                    <div className="border-solid  border border-y-0 border-x-teal-500">
                        <ListEmployee />
                    </div>
                </div>
            </div >
            <ReactModal
                onRequestClose={handleModal}
                isOpen={openModal}
            >
                <span>
                    <button onClick={handleModal}> close</button>
                </span>
                <CreateEmployee />
            </ReactModal>
        </>

    );
};

Employee.layout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Employee;
