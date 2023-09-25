import ReactModal from "react-modal";
import CreateEmployee from "../Forms/CreateEmployee";
import DashboardLayout from "../Layout/DashboardLayout";
import ListEmployee from "./ListEmployee";
import { Toaster, toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import ModalProvider from "../../Table/ModalProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { ModalContext, ModalContextProvider } from "../../ModalContext";

const Employee = () => {
    const [openModal, setOpenModal] = useState(false);
    const handleModal = () => {
        setOpenModal(!openModal);
        console.log(true);
    }

    const addAction = {
        name: "delete",
        modal: () => (<CreateEmployee />),
        notation: <div className="bg-teal-500 text-lg text-white py-2 px-3 rounded-lg"><span>+Add</span></div>,
        type: "center",
        modalData: {
            title: "Add Employee",
            key: "id",
            subTitle: "This will delete user",
            proceed: "Delete",
            terminate: "Cancel",
            link: (id) => "https://www.youtube.com/results?search_query=" + id,
            method: "delete",
        }
    }
    return (
        <>
            <ModalContextProvider>
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
                            {/*add Modal trigger*/}
                            <div className="cursor-pointer">
                                <ModalProvider modal={addAction.modal}
                                    type={addAction.type} notation={addAction.notation}
                                    modalData={addAction.modalData}
                                    rowdata={{ username: "hello", id: 5 }}
                                />
                            </div>
                            {/*end of end Modal trigger*/}
                        </div>
                        {/*end of list and add bar*/}

                        {/*Search bar*/}
                        <div className="border-solid border border-b-0 border-teal-500">
                            <div className="flex justify-end">
                            </div>
                        </div>
                        {/*end of search bar*/}
                        <div className="border-solid  border border-y-0 border-x-teal-500">
                            <ListEmployee />
                        </div>
                    </div>
                </div >
            </ModalContextProvider>
        </>

    );
};

Employee.layout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Employee;
